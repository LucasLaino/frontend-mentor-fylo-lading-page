import styles from './Header.module.css'
import logo from '../../assets/images/logo.svg'

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo-fylo" className={styles.logo}/>
      <nav>
        <ul className={styles.nav}>
          <li><a className={styles.navOptions} href="#">Features</a></li>
          <li><a className={styles.navOptions} href="#">Team</a></li>
          <li><a className={styles.navOptions} href="#">Sign in</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;