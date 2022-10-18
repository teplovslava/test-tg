import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import style from './App.module.scss'
import Main from "./components/Main/Main";

function App() {
  return (
    <div className={style.main} >
    <Header/>
    <main> 
      <Hero/>
      <Main/>
    </main>
    </div>
  );
}

export default App;
