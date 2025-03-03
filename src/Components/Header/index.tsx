import styles from './Header.module.css'
import Image from '../Image'
import photo from './../../assets/Photo.png';

export default function Header(){
    return(
        <header className={styles.header + " fader"}>
            <div className={styles.divFlex}>
                <h1>{"<"}Bruno M Sesana{"/>"}</h1>
                <h2 className='typer'>Front-End Developer</h2>
            </div>
            <div className={styles.divFlex}>
                <Image source={photo}/>
            </div>
        </header>
    )
}