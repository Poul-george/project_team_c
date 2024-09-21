import React from 'react';

// Propsの型定義
interface CardProps {
  title: string;
  content: string;
  buttonText: string;
  onButtonClick: () => void;
}

// Cardコンポーネント
const Card: React.FC<CardProps> = ({ title, content, buttonText, onButtonClick }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.content}>{content}</p>
      <button style={styles.button} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

// スタイルの定義（オプション: CSS-in-JS）
const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '20px',
    marginBottom: '12px',
  },
  content: {
    fontSize: '16px',
    marginBottom: '16px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Card;
