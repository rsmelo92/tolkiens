import styles from './styles.module.css'
import logo from './logo.png'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>

      <div className={styles.text}>
        <p>Generate design tokens online</p>
      </div>
    </header>
  )
}

export default Header
