import Input from '../Input'
import Button from '../Button'
import Steps from '../Steps'
import styles from './styles.module.css'

function Form() {
  return (
    <section className={styles.formWrapper}>
      <form className={styles.form}>
        <div className={styles.inputs}>
          <Input />
          <div className={styles.button}>
            <Button text="Generate!" />
          </div>
        </div>
        <Steps />
      </form>
    </section>
  )
}

export default Form
