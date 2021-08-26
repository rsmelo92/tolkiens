import styles from './styles.module.css'

interface Props { 
  text: string;
  variation?: 'primary' | 'secondary';
  onClick?: () => void;
}

function Button({ text, onClick, variation = 'primary' }: Props) {
  return (
    <button
      type="submit"
      className={`${styles.button}
      ${styles[variation]}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
