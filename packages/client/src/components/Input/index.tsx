import styles from './styles.module.css'

interface Props {
  value?: string;
  required?: boolean;
  onChange: ({ target: { value } }: { target: { value: string } }) => void;
}

function Input({ value, onChange, required }: Props) {
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
      required={required}
      value={value}
    />
  )
}

export default Input
