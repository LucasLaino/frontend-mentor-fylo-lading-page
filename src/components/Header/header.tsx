import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <img src="./src/assets/images/logo.svg" alt="logo-fylo" />
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