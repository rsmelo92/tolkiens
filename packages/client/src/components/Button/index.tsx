import Loading from '../Loading'
import styles from './styles.module.css'

interface Props { 
  text: string;
  isLoading: boolean;
}

function Button({ text, isLoading}: Props) {
  return (
    <button type="submit" className={styles.button} disabled={isLoading}>
      {isLoading ? (<Loading />) : text}
    </button>
  )
}

export default Button
