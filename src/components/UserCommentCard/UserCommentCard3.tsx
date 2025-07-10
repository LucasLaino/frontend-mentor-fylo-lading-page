import styles from './UserCommentCard.module.css'

function UserCommentCard() {
    return (
        <>
            <div className={styles.CommentCard}>
                <p className={styles.UserComment}>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>

                <div className={styles.UserInfos}>
                    <img src="./src/assets/images/profile-3.jpg" alt="profile-3-image" className={styles.UserProfileImg}/>

                    <div>
                        <h4>Iva Boyd</h4>
                        <p className={styles.UserOcupation}>Founder & CEO, Huddle</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserCommentCard