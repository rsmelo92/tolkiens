import Card from '../Card'
import styles from './styles.module.css'

function Steps() {
  return (
    <div className={styles.cardsWrapper}>
      <h2 className={styles.title}>Three Easy Steps</h2>
      <Card>
        <div className={styles.cardInner}>
          <h4 className={styles.cardNumber}>1</h4>
          <p className={styles.text}>Fetch and analyze site</p>
        </div>
        <div className={styles.cardInner}>
          <h4 className={styles.cardNumber}>2</h4>
          <p className={styles.text}>Extract Design Tokens with statistical analysis</p>
        </div>
        <div className={styles.cardInner}>
          <h4 className={styles.cardNumber}>3</h4>
          <p className={styles.text}>Serve variations (Flutter, RN, Android, Sass...)</p>
        </div>
      </Card>
    </div>
  )
}

export default Steps
