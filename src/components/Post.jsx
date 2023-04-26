import styles from './Post.module.css';
import Comentario from './Comment';
import { Avatar } from './Avatar';
export function Post(){
    return (
        <article className={styles.post}>
            <header className={styles.content}>
                <div className={styles.author}>
                    <Avatar src="https://avatars.githubusercontent.com/u/72263429?v=4" alt=""/>
                    <div className={styles.authorInfor}>
                        <strong>Hermeson V Beserra</strong>
                        <span>Data Science & Web Dev</span>
                    </div>
                </div>
                <time title='11 de maio às 08:13h' dateTime='2022-05-11 08:13:30'>Publicado há 1 hora</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉{' '}<a href="">jane.design/doctorcare</a></p>

                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href=''>#nlw</a>{' '}
                    <a href="">#rocketseat</a>{' '}
                </p>
            </div>

            <form action="" className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea placeholder='Digite algo'></textarea>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comentario />
                <Comentario />
                <Comentario />                
            </div>
        </article>
    )
}