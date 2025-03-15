import styles from './Header.module.css'
import Image from '../Image'
import photo from './../../assets/Photo.png';
import Scroll from '../Scroll'
import Language from '../Language';
import langContext from '../Language/langContext';
import { useContext } from 'react';

export default function Header(){
    const {lang, setLang} = useContext(langContext);
    return(
        <header className={styles.header + " fader"}>
            <Language></Language>
            <div className={styles.divFlex}>
                <h1>{"<"}Bruno M Sesana{"/>"}</h1>
                <h2 className='typer'>{lang == "pt-BR" || lang == "pt-PT" ? "Desenvolvedor Front-End" : "Front-End Developer"}</h2>
            </div>
            <div className={styles.divFlex}>
                <Image source={photo}/>
            </div>
            <Scroll></Scroll>
        </header>
    )
}