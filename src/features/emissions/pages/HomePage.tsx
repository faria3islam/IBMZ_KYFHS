import Dashboard from '@/features/emissions/components/Dashboard';
import EmissionLogger from '@/features/emissions/components/EmissionLogger';
import Advisor from '@/features/emissions/components/Advisor';
import ExportReport from '@/features/emissions/components/ExportReport';
import Card from '@/shared/components/ui/Card';
import { useEmissions } from '@/features/emissions/hooks/useEmissions';
import styles from './HomePage.module.css';

const MAP_ZONES = [
  { name: 'Downtown Watershed', risk: 'Unsafe', score: 82 },
  { name: 'Riverside East', risk: 'Caution', score: 58 },
  { name: 'North Intake Corridor', risk: 'Safe', score: 24 },
];

const ALERT_FEED = [
  'Boil-water advisory posted 4.3 km away',
  'Flood warning updated after overnight rainfall',
  'Municipal notice: treatment load elevated in west sector',
  '2 new community reports mention odor and discoloration',
];

const PIPELINE_STEPS = [
  'User enters location and requests a risk check.',
  'Backend collects advisories, weather, infrastructure links, and community reports.',
  'RAG retrieves nearby environmental evidence to ground the response.',
  'Risk engine calculates score, confidence, and classification.',
  'IBM Granite explains the result and provides recommendations.',
];

export default function HomePage() {
  const { entries, stats, addEntry } = useEmissions();

  return (
    <div className={styles.page}>
      <Dashboard stats={stats} entries={entries} />

      <section id="risk-map" className={styles.block}>
        <h2 className={styles.heading}>Interactive Geographic Risk View</h2>
        <p className={styles.subheading}>
          Layers combine alerts, weather impact, community signals, and infrastructure overlap to highlight hotspots.
        </p>
        <div className={styles.mapLayout}>
          <Card className={styles.mapCard}>
            <div className={styles.mapFrame}>
              <div className={styles.mapGlow} />
              <h3>Regional Risk Zones</h3>
              <ul className={styles.zoneList}>
                {MAP_ZONES.map((zone) => (
                  <li key={zone.name}>
                    <span>{zone.name}</span>
                    <span className={`${styles.zoneBadge} ${styles[zone.risk.toLowerCase()]}`}>
                      {zone.risk} ({zone.score})
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          <Card>
            <h3 className={styles.cardTitle}>Live Alert Feed</h3>
            <ul className={styles.alertList}>
              {ALERT_FEED.map((alert) => (
                <li key={alert}>{alert}</li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className={styles.block}>
        <Card className={styles.pipelineCard}>
          <h2 className={styles.heading}>AquaGuard AI Pipeline</h2>
          <p className={styles.subheading}>Decision is computed first, then AI explains with grounded evidence.</p>
          <ol className={styles.pipelineList}>
            {PIPELINE_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </Card>
      </section>

      <hr className={styles.divider} />
      <EmissionLogger onAdd={addEntry} />
      <hr className={styles.divider} />
      <Advisor />
      <hr className={styles.divider} />
      <ExportReport stats={stats} entries={entries} />
    </div>
  );
}
