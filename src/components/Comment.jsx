import { ThumbsUp, Trash } from 'phosphor-react';

import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/66549962?v=4" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Leonardo Dias</strong>
              <time title="January 15, 2023 at 22:50" dateTime="">Published 1h ago</time>
            </div>

            <button title="Delete Comment">
              <Trash size={20} />
            </button>
          </header>

          <p>Well done Léo!!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />  
            Like <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}