import Anchor from '../Anchor'
import code from './code.svg'
import pending from './pending.svg'
import laydown from './laydown.svg'
import idea from './idea.svg'
import found from './found.svg'
import check from './check.svg'
import styles from './styles.module.css'

function LandingContent() {
  return (
    <section className={styles.landing}>
      <div className={styles.content}>

        <div className={styles.item}>
          <div className={styles.innerItem}>
            <img src={code} alt="help icon" />

            <h4 className={styles.itemTitle}>"No code" is the best code</h4>
            <div>
              <p>
                No need for code! Just set from which site the tokens should be fetched. Then use the generated files in your Design System
              </p>
            </div>
          </div>
          <img className={styles.imageOne} src={laydown} alt="woman coding on floor" />
        </div>

        <div className={styles.item}>
          <div className={styles.innerItem}>
            <img src={pending} alt="pending icon" />

            <h4 className={styles.itemTitle}>Gain time</h4>
            <div>
              <p>
                Don't waste time and money by checking on every pattern of your website to get which tokens you are using. With one click you can get all of them after a statistical analysis.
              </p>
            </div>
          </div>
          <img className={styles.imageTwo} src={idea} alt="woman thinking" />
        </div>

        <div className={styles.item}>
          <div className={styles.innerItem}>
            <img src={check} alt="check icon" />

            <h4 className={styles.itemTitle}>Always generate tokens</h4>
            <div>
              <p>
                If no relevant pattern is found on your site, the tokens will be generated <Anchor url="https://developer.mozilla.org/en-US/docs/Web/CSS">following CSS guidelines from MDN</Anchor>
              </p>
            </div>
          </div>
          <img className={styles.imageThree} src={found} alt="staring at void" />
        </div>

      </div>
    </section>
  )
}

export default LandingContent
