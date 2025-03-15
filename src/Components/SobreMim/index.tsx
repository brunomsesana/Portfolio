import styles from './SobreMim.module.css'
import Image from "../Image";
import Photo from "../../assets/Photo2.png"
import Scroll from '../Scroll';
import { useContext } from 'react';
import langContext from '../Language/langContext';

export default function SobreMim(){
    const { lang } = useContext(langContext);
    return (
        <section className={styles.sobremim + " fader2"}>
            <div className={styles.tudo}>
                <Image source={Photo}></Image>
                <div className={styles.textos}>
                    <h2 className='typer'>{lang == 'pt-BR' ? "Sobre mim" : "About Me"}</h2>
                    <p>{lang == "pt-BR" ? "Meu nome é Bruno Machado Sesana, tenho 20 anos e sempre fui apaixonado por tecnologia, querendo criar coisas novas com ela. Comecei programando jogos, com meus 12 anos e fui evoluindo nas diferentes linguagens. Hoje tento focar mais na programação web, mas sigo evoluindo em outras areas da programação." : "My name is Bruno Machado Sesana, I'm 20 years old and I have always been in love for technology, wanting to create new things with it. I started with game development when I was 12, and I've been improving in the different programming languages throught the years. At the moment I'm focusing in web development, but I'm also enhancing my skills in other programming areas."}</p>
                </div>
            </div>
            <Scroll></Scroll>
        </section>
    );
}