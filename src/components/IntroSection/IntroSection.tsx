import styles from './IntroSection.module.css'
import illustrationIntro from '../../assets/images/illustration-intro.png'

function introSection() {
    return (
        <section className={styles.introSection}>
            <img src={illustrationIntro} alt="illustration-intro" className={styles.illustrationIntro}/>
            <h1 className={styles.introSectionTitle}>All your files in one secure location, acessible anywhere.</h1>
            <p className={styles.aboutFylo}>fylo stores all your most important files in one secure location. Access them wherever you
                need, share and collaborate with friends family, and co-workers.</p>

            <a href="#" className={styles.btnGetStarted}>Get Started</a>
        </section>
    )
}

export default introSection