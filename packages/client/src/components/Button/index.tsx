import styles from './styles.module.css'

interface Props { 
  text: string;
}

function Button({ text }: Props) {
  return (
    <button type="submit" className={styles.button}>
      {text}
    </button>
  )
}

export default Button
