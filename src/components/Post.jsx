import styles from './Post.module.css'
import { Comment } from './Comment.jsx';
import { Avatar } from './Avatar.jsx'
export function Post({ author, publishedAt }) {
    // ESTRTUTURA BÁSICA DOS POSTS:
    // author: { avatar_url: "", name: "", role: "" }
    // publishedAt: Date
    // content: String
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        className={styles.avatar}
                        src={author.avatarUrl} alt="" />
                    <div
                        className={styles.authorinfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time
                    title='11 de Maio às 08:13'
                    dateTime='2022-05-11 08:13:54'>{publishedAt.toString()}</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href='#'>jane.design/doctorcare</a></p>
                <p>
                    <a href='#'>#novoprojeto</a> {' '} <a href='#'>#nlw</a>{' '} <a href='#'>#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe seu comentário' />
                <footer>
                    <button  type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )

}