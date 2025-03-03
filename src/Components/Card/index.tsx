import styles from './Card.module.css'
import reactImg from '../../assets/logo/react.svg';
import htmlImg from '../../assets/logo/html.svg';
import cssImg from '../../assets/logo/css.svg';
import jsImg from '../../assets/logo/js.svg';
import tsImg from '../../assets/logo/ts.svg';
import jqueryImg from '../../assets/logo/jquery.svg'

const techImages: Record<string, string> = {
    React: reactImg,
    HTML: htmlImg,
    CSS: cssImg,
    JS: jsImg,
    TS: tsImg,
    JQuery: jqueryImg
};

interface CardProps {
    nome: string;
    imagem: string;
    desc: string;
    techs: string[];
    link: string;
    git?: string;
}

export default function Card({ nome, imagem, desc, techs, link, git } : CardProps){
    return (
        <div className={styles.card}>
            <img src={imagem} className={styles.imgProj}/>
            <a href={link}>{nome}</a>
            <p>{desc}</p>
            <div className={styles.techs}>
                {techs.map(x => {
                    return (
                    <img src={techImages[x]} width={50} alt={x}/>  
                    );
                })}
            </div>
            {git ? <a href={git}>Github</a> : ""}
        </div>
    )
}