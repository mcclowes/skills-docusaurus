import React from 'react';
import styles from './Banner.module.css';

/**
 * Banner component that displays a promotional message.
 * Only shown in browser (not during SSR).
 */
export default function Banner({ message, ctaLabel, ctaUrl }) {
  if (typeof window === 'undefined') {
    return null;
  }

  const isLocalhost = window.location.hostname === 'localhost';

  return (
    <div className={styles.banner}>
      <span className={styles.message}>{message}</span>
      {!isLocalhost && (
        <a href={ctaUrl} className={styles.cta}>
          {ctaLabel}
        </a>
      )}
    </div>
  );
}
