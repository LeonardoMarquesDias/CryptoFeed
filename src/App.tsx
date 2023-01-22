import Header from "./components/Header";

import './global.css'
import styles from './App.module.css'

import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

function App() {

  const posts = [
    { 
      id: 1,
      author: {
        avatarUrl: 'https://github.com/diego3g.png', 
        name: 'Diego Fernandes', 
        role:'CTO @Rocketseat'
      },
      content: [
        { type: 'paragraph', content: 'Hello Guys',},
        { type: 'paragraph', content: 'Do you know what is Bitcoin?',},
        { type: 'paragraph', content: 'Bitcoin is a decentralized digital currency that uses cryptography to secure and verify transactions on its network. It was created in 2009 by an individual or group of individuals using the pseudonym Satoshi Nakamoto. Bitcoin operates without a central authority and can be transferred directly between individuals without the need for intermediaries such as banks. It is based on blockchain technology, which is a decentralized ledger that records all transactions on the network.',},
        { type: 'link', content: 'diego.fernandes/web3developer'},
      ],
      publishedAt: new Date('2023-01-13 15:00:00'),
    },
    { 
      id: 2,
      author: {
        avatarUrl: 'https://github.com/LeonardoMarquesDias.png', 
        name: 'Leonardo Dias', 
        role:'CTO @CryptoBlogger',
      },
      content: [
        { type: 'paragraph', content: 'Hello Guys',},
        { type: 'paragraph', content: 'Do you know what is Blockchain?',},
        { type: 'paragraph', content: 'Blockchain is a secure database shared across a network of participants, where up-to-date information is available to all participants at the same time.',},
        { type: 'link', content: 'leonardo.dias/cryptoblogger'},
      ],
      publishedAt: new Date('2022-10-15 15:30:00'),
    },
  ]

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id} 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
 