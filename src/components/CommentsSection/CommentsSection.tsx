import styles from './CommentsSection.module.css'

// Criar um componente separado para listar os comentários. O código repete muito
function CommentsSection() {
    return (
        <section className={styles.CommentsMainSection}>
            <img src="./src/assets/images/bg-quotes.png" alt="bg-quotes" className={styles.bgQuotes} />

            <section className={styles.CommentsSection}>
                <div className={styles.CommentCard}>
                    <p className={styles.UserMessage}>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>

                    <div className={styles.UserProfile}>
                        <img src="./src/assets/images/profile-1.jpg" alt="profile-1-image" className={styles.UserProfileImg} />

                        <div className={styles.UserInfos}>
                            <h4 className={styles.UserName}>Satish Patel</h4>
                            <p className={styles.UserOcupation}>Founder & CEO, Huddle</p>
                        </div>
                    </div>
                </div>

                <div className={styles.CommentCard}>
                    <p className={styles.UserMessage}>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>

                    <div className={styles.UserProfile}>
                        <img src="./src/assets/images/profile-2.jpg" alt="profile-2-image" className={styles.UserProfileImg} />

                        <div className={styles.UserInfos}>
                            <h4 className={styles.UserName}>Satish Patel</h4>
                            <p className={styles.UserOcupation}>Founder & CEO, Huddle</p>
                        </div>
                    </div>
                </div>

                <div className={styles.CommentCard}>
                    <p className={styles.UserMessage}>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>

                    <div className={styles.UserProfile}>
                        <img src="./src/assets/images/profile-3.jpg" alt="profile-3-image" className={styles.UserProfileImg} />

                        <div className={styles.UserInfos}>
                            <h4 className={styles.UserName}>Satish Patel</h4>
                            <p className={styles.UserOcupation}>Founder & CEO, Huddle</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default CommentsSection