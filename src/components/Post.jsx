import Comment from './Comment';
import styles from './Post.module.css'

export default function Post() {
  return ( 
    <>
    <article className={styles.post}>
     <header>
      <div className={styles.author}>
        <img className={styles.avatar} src="https://github.com/Hiago-Maitan.png"/>
        <div className={styles.authorInfo}>
          <strong>Hiago Maitan</strong>
          <span>Front-End Developer</span>
        </div>
      </div>

      <time title='28 de fevereiro de 2024' dateTime='2024-02-28 18:01:28'>Publicado a 1h</time>
     </header>
     <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href='#'>jane.design/doctorcare</a></p>
        <p>
          <a href='#'>#novoprojeto</a>{' '}
          <a href='#'>#nlw</a>{' '}
          <a href='#'>#rocketseat</a>
        </p>
     </div>


     <form className={styles.commentForm}>
      <strong>Deixe o seu feedback</strong>

      <textarea
       placeholder='Deixe um comentário'
      />

      <footer>
        <button type='submit'>Publicar</button>
      </footer>
     </form>

     <div className={styles.commentList}>
      <Comment/>
      <Comment/>
      <Comment/>
     </div>

    </article>
    </>
   );
}

