import { FormEvent, useState } from 'react'

import Input from '../Input'
import Button from '../Button'
import Steps from '../Steps'
import Modal from '../Modal'

import styles from './styles.module.css'

interface Event { 
  target: { 
    value: string,
  };
}

function Form() {
  const [value, setValue] = useState<string>()
  const [opened, setOpened] = useState<boolean>(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(value) {
      window.location.assign(`/download?tag=${btoa(value)}`);
      setOpened(true)
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
            <Button text="Generate!" isLoading={opened} />
          </div>
        </div>
        <Steps />
      </form>

      <Modal open={opened} onClose={() => {setOpened(false)}} />
    </section>
  )
}

export default Form
