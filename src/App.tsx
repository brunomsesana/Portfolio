import {Header, Projetos, SobreMim, Contato} from './Components';
import './colors.css'
import './style.css'
import LangProvider from './Components/Language/LangProvider';
import langContext from './Components/Language/langContext';
import { useContext } from 'react';
export let lang = navigator.language;

function App() {

  return (
    <>
      <LangProvider>
        <Header/>
        <SobreMim/>
        <Projetos/>
        <Contato/>
      </LangProvider>
    </>
  )
}

export default App;
