import styles from './styles.module.css'

interface Props {
  value?: string;
  onChange: ({ target: { value } }: { target: { value: string } }) => void;
}

function Input({ value, onChange }: Props) {
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
      onChange={onChange}
      value={value}
    />
  )
}

export default Input
