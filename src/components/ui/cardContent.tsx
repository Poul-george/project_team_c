import React from 'react';

// Propsの型定義
interface CardContentProps {
  title: string;
  description: string;
  footerText?: string;  // フッターはオプション
}

// CardContentコンポーネント
const CardContent: React.FC<CardContentProps> = ({ title, description, footerText }) => {
  return (
    <div style={styles.cardContent}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
      {footerText && <div style={styles.footer}>{footerText}</div>}
    </div>
  );
};

// スタイルの定義（オプション: CSS-in-JS）
const styles = {
  cardContent: {
    padding: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '18px',
    marginBottom: '8px',
  },
  description: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '12px',
  },
  footer: {
    marginTop: '12px',
    fontSize: '12px',
    color: '#888',
    borderTop: '1px solid #ddd',
    paddingTop: '8px',
  },
};

export default CardContent;
