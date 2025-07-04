import styles from './StartedSection.module.css'

function GetAccessSection() {
    return (
        <section className={styles.GetAccessSecion}>
            <div className={styles.ContainerGetAccess}>
                <h2 className={styles.GetAccessTitle}>Get early access today</h2>
                <p className={styles.SignUpInfos}>It only takes a minute to sign up and our free starter tier is extremely generous.
                    If you have any questions, our support team would be happy to help you.</p>
            </div>
        </section>
    )

}

export default GetAccessSection