import Card from '@/shared/components/ui/Card';
import type { DashboardStats, EmissionEntry } from '@/shared/types';
import styles from './Dashboard.module.css';

const CATEGORY_ICONS: Record<string, string> = {
  transportation: '🚨',
  energy: '🌧️',
  food: '📰',
  shopping: '📣',
  waste: '🏗️',
};

const CATEGORY_LABELS: Record<string, string> = {
  transportation: 'Official alerts',
  energy: 'Weather and flood warnings',
  food: 'Local news evidence',
  shopping: 'Community reports',
  waste: 'Infrastructure overlap risk',
};

interface DashboardProps {
  stats: DashboardStats;
  entries: EmissionEntry[];
}

export default function Dashboard({ stats, entries }: DashboardProps) {
  const recentEntries = entries.slice(0, 5);
  const riskScore = Math.max(0, Math.min(100, Math.round(stats.totalEmissions)));
  const confidence = Math.max(55, Math.min(98, Math.round(60 + stats.monthlyAverage)));

  const riskLevel =
    riskScore <= 30 ? 'Safe' :
    riskScore <= 65 ? 'Caution' :
    'Unsafe';

  const riskLevelClass =
    riskLevel === 'Safe' ? styles.safe :
    riskLevel === 'Caution' ? styles.caution :
    styles.unsafe;

  const trendText = stats.percentageChange < 0 ? 'Improving signals' : 'Escalating signals';

  return (
    <section id="dashboard" className={styles.dashboard}>
      <h1 className={styles.heading}>AquaGuard AI Water Risk Dashboard</h1>
      <p className={styles.subheading}>
        Backend scoring computes risk and confidence first, then AI explains the result with evidence.
      </p>

      <div className={styles.statsGrid}>
        <Card variant="accent">
          <div className={styles.statLabel}>Risk Level</div>
          <div className={`${styles.statValue} ${riskLevelClass}`}>{riskLevel}</div>
          <div className={styles.statUnit}>From 0-100 composite score</div>
        </Card>

        <Card variant="accent">
          <div className={styles.statLabel}>Confidence</div>
          <div className={styles.statValue}>{confidence}%</div>
          <div className={styles.statUnit}>Signal quality and recency</div>
        </Card>

        <Card variant="accent">
          <div className={styles.statLabel}>Dominant Signal</div>
          <div className={styles.statValue}>
            {CATEGORY_ICONS[stats.topCategory]} {CATEGORY_LABELS[stats.topCategory]}
          </div>
          <div className={styles.statUnit}>Highest weighted evidence source</div>
        </Card>

        <Card variant="accent">
          <div className={styles.statLabel}>Risk Score</div>
          <div className={`${styles.statValue} ${stats.percentageChange < 0 ? styles.positive : styles.negative}`}>
            {riskScore}/100
          </div>
          <div className={styles.statUnit}>
            {trendText} ({stats.percentageChange > 0 ? '+' : ''}{stats.percentageChange}% change)
          </div>
        </Card>
      </div>

      <Card className={styles.architectureNote}>
        <h2 className={styles.sectionTitle}>Explainable Decision Pipeline</h2>
        <p>
          Logic first: backend computes score and confidence. RAG retrieves alerts, reports, and local context.
          IBM Granite generates the explanation and recommendations. The model does not make the decision alone.
        </p>
      </Card>

      <Card>
        <h2 className={styles.sectionTitle}>Latest Evidence Signals</h2>
        <ul className={styles.entryList}>
          {recentEntries.map((entry) => (
            <li key={entry.id} className={styles.entryItem}>
              <span className={styles.entryIcon}>{CATEGORY_ICONS[entry.category]}</span>
              <div className={styles.entryDetails}>
                <span className={styles.entryDesc}>{entry.description}</span>
                <span className={styles.entryDate}>{entry.date} - {CATEGORY_LABELS[entry.category]}</span>
              </div>
              <span className={styles.entryAmount}>{entry.amount} pts</span>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
