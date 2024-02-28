import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css'

export default function Sidebar() {
  return ( 
    <>
    <aside className={styles.sidebar}>
      <img 
      className={styles.cover} 
      src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    
    <div className={styles.profile}>
    <img className={styles.avatar} src="https://github.com/Hiago-Maitan.png"/>

      <strong>Hiago Maitan</strong>
      <span>Front-End Developer</span>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </div>
    
    </aside>
    </>
   );
}
