import {PencilLine } from 'phosphor-react'

import bitcoinCover from '../assets/bitcoincover.png'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover} 
        src={bitcoinCover} 
      />

      <div className={styles.profile}>
        <img 
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/66549962?v=4" 
        />

        <strong>Leonardo Dias</strong>
        <span>Blockchain Developer</span>
      </div>

      <footer>
        <a href="">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}