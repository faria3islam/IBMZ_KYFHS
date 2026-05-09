import React from 'react';

const bannerStyle = {
  background: 'linear-gradient(135deg, rgba(20,184,166,0.12), rgba(56,189,248,0.12))',
  border: '1px solid rgba(56,189,248,0.16)',
  borderRadius: '1rem',
  color: '#e2e8f0',
  display: 'grid',
  gap: '0.75rem',
  padding: '1.3rem 1.4rem',
};

const linkStyle = {
  color: '#14b8a6',
  fontWeight: 700,
  textDecoration: 'none',
};

export default function MarketingBanner() {
  return (
    <section style={bannerStyle}>
      <div>
        <strong style={{ display: 'block', fontSize: '1.05rem', marginBottom: '0.35rem' }}>
          Get full access to Aquaguard insights
        </strong>
        <p style={{ margin: 0, color: '#cbd5e1' }}>
          Sign up to unlock company segmentation, export reports, and extended country detail.
        </p>
      </div>
      <div>
        <a href="#" style={linkStyle}>
          Register now →
        </a>
      </div>
    </section>
  );
}
