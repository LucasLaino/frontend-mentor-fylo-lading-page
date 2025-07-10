import styles from './CommentsSection.module.css'
import UserCommentCard1 from '../UserCommentCard/UserCommentCard1'
import UserCommentCard2 from '../UserCommentCard/UserCommentCard2'

// Criar um componente separado para listar os comentários. O código repete muito
function CommentsSection() {
    return (
        <section className={styles.CommentsMainSection}>
            <img src="./src/assets/images/bg-quotes.png" alt="bg-quotes" className={styles.bgQuotes} />

            <section className={styles.CommentsSection}>
                <UserCommentCard1 />
                <UserCommentCard2 />
            </section>
        </section>
    )
}

export default CommentsSection