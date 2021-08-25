import Input from '../Input'
import Button from '../Button'
import Card from '../Card'
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

        <div className={styles.cardsWrapper}>
          <Card>
            <div className={styles.cardInner}>
              <h4 className={styles.cardNumber}>1</h4>
              <p>Analyze site</p>
            </div>
            <div className={styles.cardInner}>
              <h4 className={styles.cardNumber}>2</h4>
              <p>Extract Design Tokens with statistical analysis</p>
            </div>
            <div className={styles.cardInner}>
              <h4 className={styles.cardNumber}>3</h4>
              <p>Serve variations (Flutter, RN, Android, Sass...)</p>
            </div>
          </Card>
        </div>
      </form>
    </section>
  )
}

export default Form
