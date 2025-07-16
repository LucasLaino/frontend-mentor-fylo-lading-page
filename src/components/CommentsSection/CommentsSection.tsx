import styles from './CommentsSection.module.css'
import UserCommentCard1 from '../UserCommentCard/UserCommentCard1'
import UserCommentCard2 from '../UserCommentCard/UserCommentCard2'
import UserCommentCard3 from '../UserCommentCard/UserCommentCard3'

function CommentsSection() {
    return (
        <section className={styles.CommentsMainSection}>
            <img src="./src/assets/images/bg-quotes.png" alt="bg-quotes" className={styles.bgQuotes} />

        {/* Adicionar props aos cards para diminuir o código */}
            <section className={styles.CommentsSection}>
                <UserCommentCard1 />
                <UserCommentCard2 />
                <UserCommentCard3 />
            </section>
        </section>
    )
}

export default CommentsSection