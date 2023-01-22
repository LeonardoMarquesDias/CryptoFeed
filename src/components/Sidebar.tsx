import {PencilLine } from 'phosphor-react'

import bitcoinCover from '../assets/bitcoincover.png'
import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover} 
        src={bitcoinCover} 
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/LeonardoMarquesDias.png" />

        <strong>Leonardo Dias</strong>
        <span>Crypto Blogger</span>
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