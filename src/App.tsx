import Header from "./components/Header";
import Post from "./Post";

import './styles.css';
import './global.css'

function App() {

  return (
    <div>
     <Header />

      <Post 
        author="Leonardo Dias" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsa natus, non id deserunt tempore repellendus cumque sit accusantium! Repellendus quam soluta cum perspiciatis harum commodi explicabo repudiandae eius libero?" />
    </div>
  )
}

export default App
 