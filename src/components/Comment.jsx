import style from './Comment';
import {ThumbsUp, Trash} from 'phosphor-react'

export default function Comment(){
    return (
        <div className={style.comment}>
            <img src="https://github.com/hermeson883.png" alt="" />
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Hermeson V Beserra <span>(vôce)</span></strong>
                            <time title='11 de Maio às 08:13h' dateTime="2023-05-11 08:13:30">Cerca de 1H atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size = {20}/>
                        </button>
                    </header>
                    <p>Muito bom, Parabéns!!</p>
                </div>

                <button>
                    <ThumbsUp size={20} />
                    Aplaudir <span>20</span>
                </button>

            </div>
        </div>
    )
}

