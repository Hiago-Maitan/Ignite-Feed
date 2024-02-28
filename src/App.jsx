import { Header } from "./components/Header"
import './global.css'
import style from './App.module.css'
import Sidebar from "./components/Sidebar"


function App() {

  return (
    <>
      <Header/>
      <div className={style.wrapper}>
          <Sidebar/>
        <main></main>
      </div>
    </>
  )
}

export default App
