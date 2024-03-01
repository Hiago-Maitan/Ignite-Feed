import styles from './Comment.module.css'
import {ThumbsUp, Trash} from 'phosphor-react'

export default function Comment() {
  return ( 
    <div className={styles.comment}>
      <img src="https://github.com/Hiago-Maitan.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
             <div className={styles.authorAndTime}>
              <strong>Hiago Maitan</strong>
              <time title='28 de fevereiro de 2024' dateTime='2024-02-28 18:01:28'>Publicado a 1h</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bomm Devon, parabéns !!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
   );
}