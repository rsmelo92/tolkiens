import { FormEvent, useState } from 'react'
import Input from '../Input'
import Button from '../Button'
import Steps from '../Steps'
import styles from './styles.module.css'

interface Event { 
  target: { value: string };
}

function Form() {
  const [value, setValue] = useState<string>()
  const [loading, setLoading] = useState<boolean>(false)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(value) {
      setLoading(true)
      fetch(`/download?tag=${btoa(value)}`)
        .then(({ statusText }) => {
          console.log(statusText);
        })
        .catch(console.error)
        .finally(() => {
          setLoading(false)
          setValue('')
        })
    }
  }

  return (
    <section className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <Input
            onChange={
              ({ target: { value } }: Event) => setValue(value)
            } 
          />
          <div className={styles.button}>
            <Button isLoading={loading} text="Generate!" />
          </div>
        </div>
        <Steps />
      </form>
    </section>
  )
}

export default Form
