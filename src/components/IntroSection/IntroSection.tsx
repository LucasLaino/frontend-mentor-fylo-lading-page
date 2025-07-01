import styles from './IntroSection.module.css'

function IntroSection() {
    return (
        <section className={styles.IntroSection}>
            <img src="./src/assets/images/illustration-intro.png" alt="illustration-intro" />
            <h1 className={styles.IntroSectionTitle}>All your files in one secure location, acessible anywhere.</h1>
            <p className={styles.AboutFylo}>fylo stores all your most important files in one secure location. Access them wherever you
                need, share and collaborate with friends family, and co-workers.</p>

            <a href="#" className={styles.BtnGetStarted}>Get Started</a>
        </section>
    )
}

export default IntroSection