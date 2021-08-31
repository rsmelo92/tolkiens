import Loading from '../Loading'
import styles from './styles.module.css'

interface Props { 
  text: string;
  isLoading?: boolean;
  variation?: 'primary' | 'secondary';
  onClick?: () => void;
}

function Button({ text, onClick, variation = 'primary', isLoading = false }: Props) {
  return (
    <button
      type="submit"
      className={`${styles.button} ${styles[variation]}`}
      onClick={onClick}
    >
      {isLoading ? (<Loading />) : text}
    </button>
  )
}

export default Button
