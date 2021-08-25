import styles from './styles.module.css'

interface Props {
  value?: string;
}

function Input({ value }: Props) {
  return (
    <input 
      className={styles.input}
      type="url" 
      name="url" 
      pattern="https?://.*" 
      minLength={7} 
      autoComplete="off" 
      autoFocus 
      placeholder="Enter a webpage URL"
      value={value}
    />
  )
}

export default Input
