import styles from './Post.module.css'


export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/66549962?v=4" />
          <div className={styles.authorInfo}>
            <strong>Leonardo Dias</strong>
            <span>Blockchain Developer</span>
          </div>
        </div>

        <time title="January 15, 2023 at 22:50" dateTime="">Published 1h ago</time>
      </header>

      <div className={styles.content}>
        <p>Hello Guys!</p>
        <p>What's Bitcoin?</p>
        <p>Bitcoin is a decentralized digital currency that uses cryptography to secure and verify transactions on its network. It was created in 2009 by an individual or group of individuals using the pseudonym Satoshi Nakamoto. Bitcoin operates without a central authority and can be transferred directly between individuals without the need for intermediaries such as banks. It is based on blockchain technology, which is a decentralized ledger that records all transactions on the network.</p>
        <p><a href="">#bitcoin #blockchain</a></p>
      </div>
    </article>
  )
}

