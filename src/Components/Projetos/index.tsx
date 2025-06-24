import styles from './Projetos.module.css'
import Card from '../Card'
import projetos from '../../projetos.json'
import langContext from '../Language/langContext'
import { useContext } from 'react'
import Scroll from '../Scroll'

export default function Projetos(){
    const { lang } = useContext(langContext);
    return (
        <section className={styles.projetos + " fader2"}>
            <h2 className='typer'>{lang == 'pt-BR' ? "Projetos" : "Projects"}</h2>
            <div className={styles.cards}>
                {projetos.map(x =>
                    <Card imagem={x.imagem} nome={lang == "pt-BR" ? x['pt-BR'].nome : (lang == "en-US" ? x['en-US'].nome : "")} desc={lang == "pt-BR" ? x['pt-BR'].desc : (lang == "en-US" ? x['en-US'].desc : "")} techs={x.techs} link={x.link} git={x.git}/>
                )}
                <Scroll></Scroll>
            </div>
        </section>
    )
}