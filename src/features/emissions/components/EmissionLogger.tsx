import { useState, type FormEvent } from 'react';
import Card from '@/shared/components/ui/Card';
import Button from '@/shared/components/ui/Button';
import type { EmissionEntry, EmissionCategory } from '@/shared/types';
import styles from './EmissionLogger.module.css';

const CATEGORIES: EmissionCategory[] = [
  'transportation',
  'energy',
  'food',
  'shopping',
  'waste',
];

const CATEGORY_LABELS: Record<EmissionCategory, string> = {
  transportation: 'Official Alerts',
  energy: 'Weather and Flood Warnings',
  food: 'Local News Evidence',
  shopping: 'Community Reports',
  waste: 'Infrastructure Overlap',
};

interface EmissionLoggerProps {
  onAdd: (entry: Omit<EmissionEntry, 'id'>) => void;
}

export default function EmissionLogger({ onAdd }: EmissionLoggerProps) {
  const [category, setCategory] = useState<EmissionCategory>('transportation');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!description || !amount) return;

    onAdd({
      category,
      description,
      amount: parseFloat(amount),
      date: new Date().toISOString().split('T')[0],
    });

    setDescription('');
    setAmount('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  }

  return (
    <section id="community" className={styles.section}>
      <h2 className={styles.heading}>Community Signal Intake</h2>
      <Card>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="category" className={styles.label}>Evidence Source</label>
            <select
              id="category"
              className={styles.select}
              value={category}
              onChange={(e) => setCategory(e.target.value as EmissionCategory)}
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{CATEGORY_LABELS[cat]}</option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="description" className={styles.label}>Location or Observation</label>
            <input
              id="description"
              type="text"
              className={styles.input}
              placeholder="e.g. Brown water near Riverside Park intake"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="amount" className={styles.label}>Signal Weight (points)</label>
            <input
              id="amount"
              type="number"
              className={styles.input}
              placeholder="e.g. 12"
              min="0"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div className={styles.actions}>
            <Button type="submit">Submit Signal</Button>
            {submitted && (
              <span className={styles.success}>✓ Signal added to local evidence queue</span>
            )}
          </div>
        </form>
      </Card>
    </section>
  );
}
