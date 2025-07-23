import styles from './CommentsSection.module.css'
import { Card } from '../Card/Card'
import { cardsInfo } from '../../data/cards-info'
import bgQuotes from '../../assets/images/bg-quotes.png'

function CommentsSection() {
    return (
        <section className={styles.commentsMainSection}>
            <img src={bgQuotes} alt="bg-quotes" className={styles.bgQuotes} />

            <section className={styles.commentsSection}>
                {
                    cardsInfo.map((card) => {
                        return (
                            <Card
                                key={card.userName}
                                userComment={card.userComment}
                                userProfileImg={card.userProfileImg}
                                userName={card.userName}
                                userPosition={card.UserPosition}
                            />
                        )
                    })
                }
            </section>
        </section>
    )
}

export default CommentsSection