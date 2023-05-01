import styles from './Post.module.css';
import Comentario from './Comment';
import { Avatar } from './Avatar';
import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

export function Post({author, publishedAt, content}){
    const publishedDateFormated = format(publishedAt, "dd 'de' LLLL 'às' HH:MMh", {
        locale: ptBR
    })

    const relativeDate = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true 
    })

    return (
        <article className={styles.post}>
            <header className={styles.content}>
                <div className={styles.author}>
                    <Avatar hasborder={false}  src={author.avatarUrl} alt=""/>
                    <div className={styles.authorInfor}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                        {console.log(author)}
                    </div>
                </div>
                <time title='11 de maio às 08:13h' dateTime={publishedDateFormated}>
                    {relativeDate}
                </time>
            </header>
            <div className={styles.content}>
                {
                    content.map(line => {
                        return line.type  == "Paragraph" ?  <p>{line.content}</p> : <p><a href='#'>{line.content}</a></p>
                    })
                }
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