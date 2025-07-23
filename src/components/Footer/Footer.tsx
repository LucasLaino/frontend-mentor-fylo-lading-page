import styles from './Footer.module.css'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import logo from '../../assets/images/logo.svg'
import iconLocation from '../../assets/images/icon-location.svg'
import iconPhone from '../../assets/images/icon-phone.svg'
import iconEmail from '../../assets/images/icon-email.svg'

function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <img src={logo} alt="logo" className={styles.logo} />

                <section className={styles.footerInfos}>
                    <div className={styles.location}>
                        <ul>
                            <li>
                                <img src={iconLocation} alt="icon-location" className={styles.iconLocation} />
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua</p>
                            </li>
                        </ul>
                    </div>

                    <section className={styles.contact}>
                        <div className={styles.phone}>
                            <img src={iconPhone} alt="icon-phone" />
                            <p>+1-543-123-4567</p>
                        </div>

                        <div className={styles.email}>
                            <img src={iconEmail} alt="icon-email" />
                            <p>example@fylo.com</p>
                        </div>
                    </section>

                    <section className={styles.fyloInfos}>
                        <ul>
                            <li>About Us</li>
                            <li>jobs</li>
                            <li>Press</li>
                            <li>Blog</li>
                        </ul>

                        <ul>
                            <li>Contact Us</li>
                            <li>Terms</li>
                            <li>Privacy</li>
                        </ul>
                    </section>

                    <section className={styles.socials}>
                        <ul>
                            <li><FaFacebookF /></li>
                            <li><FaTwitter /></li>
                            <li><FaInstagram /></li>
                        </ul>
                    </section>
                </section>

                <div className={styles.finalCredits}>
                    <div>
                        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                            Coded by <a href="https://www.linkedin.com/in/lucaslaino/" target="_blank">Lucas Laino</a>.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer