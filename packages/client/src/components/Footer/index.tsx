
import Anchor from '../Anchor'
import styles from './styles.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.items}>
        <h3 className={styles.title}>Related Content</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Anchor url="https://www.designsystemchecklist.com/category/design-tokens">
              Design System Checklist - Tokens
            </Anchor>
          </li>
          <li className={styles.listItem}>
            <Anchor url="https://atomicdesign.bradfrost.com/table-of-contents/">
              Atomic Design - Brad Frost
            </Anchor>
          </li>
          <li className={styles.listItem}>
            <Anchor url="https://www.w3.org/TR/wai-aria-1.1/">
              Accessible Rich Internet Applications - W3c
            </Anchor>
          </li>
          <li className={styles.listItem}>
            <Anchor url="https://designsystemsrepo.com/design-systems/">
              Design Systems Gallery
            </Anchor>
          </li>
        </ul>
      </div>
      <div className={styles.items}>
        <h3 className={styles.title}>Contact me</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Anchor url="https://github.com/rsmelo92">
              Github
            </Anchor>
          </li>
          <li className={styles.listItem}>
            <Anchor url="https://twitter.com/rsmelo_">
              Twitter
            </Anchor>
          </li>
          <li className={styles.listItem}>
            <Anchor url="https://www.buymeacoffee.com/rsmelo">
              Buy me a coffee
            </Anchor>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
