import styles from './Card.module.css'
import type { CardProps } from "../../types/card-info";

export const Card = ({ userComment, userProfileImg, userName, userPosition }: CardProps) => {
    return (
        <div className={styles.commentCard}>
            <p className={styles.userComment}>{userComment}</p>
            <div className={styles.userInfos}>
                <img src={userProfileImg} alt="user-profile-img" className={styles.userProfileImg} />

                <div>
                    <h3 className={styles.userName}>{userName}</h3>
                    <p className={styles.userPosition}>{userPosition}</p>
                </div>
            </div>
        </div>
    )
}
