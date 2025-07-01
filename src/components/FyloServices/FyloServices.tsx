import styles from './FyloServices.module.css'

function FyloServices() {
    return (
        <section className={styles.ServicesSection}>
            <div className={styles.Services}>
                <img src="./src/assets/images/icon-access-anywhere.svg" alt="icon-access-anywhere" />

                <h3 className={styles.ServiceTitle}>Access your files, anywhre</h3>
                <p className={styles.ServiceDescription}>The ability to use a smartphone, tablet, or computer to access your account means
                    your files follow you
                    everywhere.</p>

                <img src="./src/assets/images/icon-collaboration.svg" alt="icon-collaboration" />

                <h3 className={styles.ServiceTitle}>Real-time collaboration</h3>
                <p className={styles.ServiceDescription}>Securely share files and folders with friends, family and colleagues for live
                    collaboration. No email
                    attachments required.</p>
            </div>

            <div className={styles.Services}>
                <img src="./src/assets/images/icon-security.svg" alt="icon-security" />

                <h3 className={styles.ServiceTitle}>Security you can trust</h3>
                <p className={styles.ServiceDescription}>2-factor authentication and user-controlled encryption are just couple of the
                    security features we allow to
                    help secure your files.</p>

                <img src="./src/assets/images/icon-any-file.svg" alt="icon-any-file" />

                <h3 className={styles.ServiceTitle}>Store any type of file</h3>
                <p className={styles.ServiceDescription}>Whether you're sharing holidays photos or work documents, Fylo has you covered
                    allowing for all file types to
                    be securely stored and shared.</p>
            </div>
        </section>
    )
}

export default FyloServices