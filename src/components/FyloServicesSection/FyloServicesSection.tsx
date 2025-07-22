import styles from './FyloServicesSection.module.css'

function FyloServicesSection() {
    return (
        <section className={styles.servicesSection}>
           <div className={styles.services}>
                <img src="./src/assets/images/icon-access-anywhere.svg" alt="icon-access-anywhere" />

                <h3 className={styles.serviceTitle}>Access your files, anywhere</h3>
                <p className={styles.serviceDescription}>The ability to use a smartphone, tablet, or computer to access your account means
                    your files follow you
                    everywhere.</p>
                
                <img src="./src/assets/images/icon-security.svg" alt="icon-security" />

                <h3 className={styles.serviceTitle}>Security you can trust</h3>
                <p className={styles.serviceDescription}>2-factor authentication and user-controlled encryption are just couple of the
                    security features we allow to
                    help secure your files.</p>               
            </div>

            <div className={styles.services}>
                <img src="./src/assets/images/icon-collaboration.svg" alt="icon-collaboration" />

                <h3 className={styles.serviceTitle}>Real-time collaboration</h3>
                <p className={styles.serviceDescription}>Securely share files and folders with friends, family and colleagues for live
                    collaboration. No email
                    attachments required.</p>

                <img src="./src/assets/images/icon-any-file.svg" alt="icon-any-file" />

                <h3 className={styles.serviceTitle}>Store any type of file</h3>
                <p className={styles.serviceDescription}>Whether you're sharing holidays photos or work documents, Fylo has you covered
                    allowing for all file types to
                    be securely stored and shared.</p>
            </div>
        </section>
    )
}

export default FyloServicesSection