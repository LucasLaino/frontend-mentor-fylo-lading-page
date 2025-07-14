import styles from './StayProductiveSection.module.css'

function StayProductiveSection() {
    return (
        <section className={styles.StayProductiveSection}>
            <img src="./src/assets/images/illustration-stay-productive.png" alt="illustration-stay-productive" className={styles.illustrationStayProductive}/>

            <div className={styles.StayProductiveInfos}>
                <h2 className={styles.StayProductiveTitle}>Stay Productive, Wherever you are</h2>

                <p className={styles.AboutStayProductive}>Never let location be an issue when acessing your files. Fylo has you covered for all of your file storage needs.</p>

                <p className={styles.AboutStayProductive}>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>

                <a href="#" className={styles.BtnSeeHowFyloWorks}> See how Fylo works</a>
            </div>
        </section>
    )
}

export default StayProductiveSection