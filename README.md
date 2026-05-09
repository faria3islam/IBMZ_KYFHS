## AquaGuard AI

AI-Powered Water Risk Intelligence Platform.

AquaGuard AI is a React + TypeScript web application for explainable water contamination risk monitoring. The current implementation presents a risk dashboard experience with evidence intake, AI explanation support, and PDF risk brief exports.

### Product Direction

- Combines official alerts, weather signals, local context, and community reports.
- Uses backend scoring logic to compute risk and confidence.
- Uses AI to explain the result, not to make the decision.
- Surfaces risk as Safe / Caution / Unsafe with confidence framing.

### Explainable Pipeline

1. User enters a location.
2. Backend gathers alerts and environmental evidence.
3. Retrieval step provides grounded context.
4. Risk engine computes score and classification.
5. AI generates human-readable rationale and recommendations.

### Prerequisites

- Node.js 18+
- A [Google Gemini API key](https://aistudio.google.com/app/apikey)

### Installation

```bash
git clone <repo-url>
cd IBMZ_KYFHS
npm install
```

### Configuration

```bash
cp .env.example .env
# Edit .env and add your VITE_GEMINI_API_KEY
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build

```bash
npm run build
```

---

## 🔧 Tech Stack

- **React 19** + **TypeScript**
- **Vite** — fast dev/build tooling
- **CSS Modules** — scoped component styles
- **Google Gemini API** (placeholder path for AI explanation integration)
- **jsPDF + jspdf-autotable** for risk briefing export

### Current Scope Notes

- The codebase is currently frontend-centric with mock/demo-style data flow in parts of the risk pipeline.
- The UI language has been refocused to AquaGuard AI and explainable risk framing.
- A backend service for production-grade scoring, retrieval, and audit logs can be layered in without changing core React structure.
