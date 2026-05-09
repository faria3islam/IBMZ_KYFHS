import Card from '@/shared/components/ui/Card';
import Button from '@/shared/components/ui/Button';
import { useReport } from '@/features/emissions/hooks/useReport';
import type { DashboardStats, EmissionEntry } from '@/shared/types';
import styles from './ExportReport.module.css';

interface ExportReportProps {
  stats: DashboardStats;
  entries: EmissionEntry[];
}

export default function ExportReport({ stats, entries }: ExportReportProps) {
  const { status, error, lastReport, generateAndExport } = useReport(stats, entries);

  const isGenerating = status === 'generating';

  return (
    <section id="export" className={styles.section}>
      <h2 className={styles.heading}>Export Risk Briefing</h2>
      <p className={styles.subheading}>
        Generate a PDF briefing with risk classification, confidence details, and explainable AI narrative.
      </p>

      <Card className={styles.card}>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Evidence points</span>
            <span className={styles.infoValue}>{entries.length}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Composite score</span>
            <span className={styles.infoValue}>{Math.min(100, Math.round(stats.totalEmissions))} / 100</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>AI explanation</span>
            <span className={styles.infoValue}>Included ✓</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Format</span>
            <span className={styles.infoValue}>PDF (A4)</span>
          </div>
        </div>

        {isGenerating && (
          <div className={styles.progress}>
            <div className={styles.progressBar} />
            <p className={styles.progressText}>
              Generating explainable reasoning and building your PDF...
            </p>
          </div>
        )}

        {error && <p className={styles.error}>{error}</p>}

        {status === 'ready' && lastReport && (
          <p className={styles.success}>
            ✓ Report downloaded —{' '}
            <span className={styles.filename}>
              aquaguard-risk-brief-{lastReport.generatedAt.split('T')[0]}.pdf
            </span>
          </p>
        )}

        <div className={styles.actions}>
          <Button
            onClick={generateAndExport}
            isLoading={isGenerating}
            size="lg"
          >
            {isGenerating ? 'Generating...' : 'Download Risk PDF'}
          </Button>
          <p className={styles.hint}>
            The briefing includes risk scoring signals, AI-generated narrative explanation,
            and recommended response actions.
          </p>
        </div>
      </Card>
    </section>
  );
}
