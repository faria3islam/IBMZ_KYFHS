import { GoogleGenerativeAI } from '@google/generative-ai';
import { getGeminiApiKey } from '@/config/env';
import type { AdvisorRequest, AdvisorResponse, ChatMessage, DashboardStats, EmissionEntry } from '@/shared/types';

const API_KEY = getGeminiApiKey();

const SYSTEM_INSTRUCTION = `You are AquaGuard AI, an environmental risk explanation assistant.
Your role is to explain water contamination risk assessments in clear, auditable language.
The backend computes risk score, confidence, and classification; you explain why using provided evidence.
Keep responses concise (2-4 paragraphs) and include practical recommendations.
When confidence is limited, state uncertainty and suggest what additional data is needed.`;

function createClient(): GoogleGenerativeAI | null {
  if (!API_KEY) return null;
  return new GoogleGenerativeAI(API_KEY);
}

function toGeminiHistory(history: ChatMessage[]) {
  return history.map((msg) => ({
    role: msg.role,
    parts: [{ text: msg.content }],
  }));
}

/**
 * Send a message to the Gemini API and get a risk explanation response.
 */
export async function getAdvisorResponse(
  request: AdvisorRequest
): Promise<AdvisorResponse> {
  const client = createClient();

  if (!client) {
    return {
      content: '',
      error:
        'Gemini API key is not configured. Add VITE_GEMINI_API_KEY to your .env file.',
    };
  }

  try {
    const model = client.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    const chat = model.startChat({
      history: toGeminiHistory(request.history ?? []),
    });

    const result = await chat.sendMessage(request.prompt);
    const content = result.response.text();

    return { content };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return { content: '', error: `Gemini API error: ${message}` };
  }
}

/**
 * Generate risk-response tips for a specific evidence category.
 */
export async function getEcoTips(category: string): Promise<AdvisorResponse> {
  return getAdvisorResponse({
    prompt: `Give me 3 practical actions to reduce water contamination risk related to ${category}. Format as a numbered list.`,
  });
}

/**
 * Generate a concise report summary and actionable advice for a PDF export.
 * Returns { summary, advice } or error strings if the API is unavailable.
 */
export async function generateReportContent(
  stats: DashboardStats,
  entries: EmissionEntry[]
): Promise<{ summary: string; advice: string }> {
  const categoryBreakdown = entries.reduce<Record<string, number>>((acc, e) => {
    acc[e.category] = Number(((acc[e.category] ?? 0) + e.amount).toFixed(2));
    return acc;
  }, {});

  const breakdownText = Object.entries(categoryBreakdown)
    .map(([cat, points]) => `  - ${cat}: ${points} signal points`)
    .join('\n');

  const trend =
    stats.percentageChange < 0
      ? `down ${Math.abs(stats.percentageChange)}% from last period`
      : `up ${stats.percentageChange}% from last period`;

  const summaryPrompt = `
Write a 2-3 sentence narrative summary of the following water risk assessment data for a PDF briefing.
Be factual, explainable, and operationally useful. Do not use markdown or bullet points.

Composite risk score: ${Math.min(100, Math.round(stats.totalEmissions))}/100
Confidence proxy: ${Math.max(55, Math.min(98, Math.round(60 + stats.monthlyAverage)))}%
Trend: ${trend}
Dominant evidence source: ${stats.topCategory}
Evidence breakdown:
${breakdownText}
`.trim();

  const advicePrompt = `
Based on the water risk evidence below, write 3-5 concise, actionable recommendations.
Each recommendation should reference monitoring, mitigation, or communication actions.
Format each recommendation as a plain numbered list (e.g. "1. ..."). No markdown headers or bold text.

Dominant evidence source: ${stats.topCategory}
Evidence breakdown:
${breakdownText}
`.trim();

  const [summaryRes, adviceRes] = await Promise.all([
    getAdvisorResponse({ prompt: summaryPrompt }),
    getAdvisorResponse({ prompt: advicePrompt }),
  ]);

  const fallbackSummary =
    `Composite risk score is ${Math.min(100, Math.round(stats.totalEmissions))}/100 with ` +
    `${Math.max(55, Math.min(98, Math.round(60 + stats.monthlyAverage)))}% confidence. ` +
    `The strongest evidence source is ${stats.topCategory}.`;

  const fallbackAdvice =
    '1. Increase water sampling frequency in the highest-risk zone.\n' +
    '2. Cross-check flood alerts with nearby infrastructure vulnerabilities.\n' +
    '3. Escalate advisories when community reports cluster in one area.\n' +
    '4. Share clear public guidance with confidence and uncertainty notes.\n' +
    '5. Track daily evidence drift to detect rapid risk changes.';

  return {
    summary: summaryRes.error || !summaryRes.content ? fallbackSummary : summaryRes.content,
    advice: adviceRes.error || !adviceRes.content ? fallbackAdvice : adviceRes.content,
  };
}
