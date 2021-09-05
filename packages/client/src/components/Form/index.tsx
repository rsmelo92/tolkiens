import { FormEvent, useState } from 'react'

import Input from '../Input'
import Button from '../Button'
import Steps from '../Steps'
import TokensDisplay from '../TokensDisplay'

import styles from './styles.module.css'

interface Event { 
  target: { 
    value: string,
  };
}

function Form() {
  const [value, setValue] = useState<string>()
  const [loading, setLoading] = useState<boolean>(false)
  const [tokens, setTokens] = useState([])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(value) {
      setLoading(true)

      fetch(`/tokens?tag=${btoa(value)}`)
        .then(res => res.json())
        .then(res => {
          setTokens(res)
        })
        .catch(console.error)
        .finally(() => {
          setLoading(false)
        })
    }
  }

  return (
    <section className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <Input
            required
            value={value}
            onChange={(event: Event) => setValue(event.target.value)} 
          />
          <div className={styles.button}>
            <Button text="Generate!" isLoading={loading} />
          </div>
        </div>

        <TokensDisplay tokens={tokens} />
        <Steps />
      </form>
    </section>
  )
}

export default Form
