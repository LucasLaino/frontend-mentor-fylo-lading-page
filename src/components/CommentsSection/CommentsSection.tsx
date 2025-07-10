import styles from './CommentsSection.module.css'
import UserCommentCard from '../UserCommentCard/UserCommentCard'

// Criar um componente separado para listar os comentários. O código repete muito
function CommentsSection() {
    return (
        <section className={styles.CommentsMainSection}>
            <img src="./src/assets/images/bg-quotes.png" alt="bg-quotes" className={styles.bgQuotes} />

            <section className={styles.CommentsSection}>
                <UserCommentCard />
            </section>
        </section>
    )
}

export default CommentsSection