import Header from "./components/Header";

import './global.css'
import styles from './App.module.css'

import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Leonardo Dias"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reprehenderit magni, veritatis voluptates natus laboriosam nesciunt laudantium molestiae repellendus quaerat ut, omnis odit consequuntur, suscipit eius velit? Explicabo, veniam asperiores?"
          />
          <Post 
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reprehenderit magni, veritatis voluptates natus laboriosam nesciunt laudantium molestiae repellendus quaerat ut, omnis odit consequuntur, suscipit eius velit? Explicabo, veniam asperiores?"
          />
        </main>
      </div>
    </div>
  )
}

export default App
 