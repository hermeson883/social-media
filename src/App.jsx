//JSX -> JavaScript + XML
import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import './global.css'
import style from './App.module.css';

export function App() {
  return (
    <div>

      <Header />

      <div className={style.wrapper}>
        <Sidebar/>

        <aside>

        </aside>
        <main>
          <Post author='Hermeson do Vale' content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nisi quas ea maiores modi delectus voluptate laborum veritatis voluptas, odit, quisquam facere quia alias reiciendis cumque culpa soluta error vero?"  />
          <Post author='Felipe' content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nisi quas ea maiores modi delectus voluptate laborum veritatis voluptas, odit, quisquam facere quia alias reiciendis cumque culpa soluta error vero?" />
        </main> 
      </div>

    </div>
  )
}
