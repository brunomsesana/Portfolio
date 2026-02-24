import styles from './Projetos.module.css'
import Card from '../Card'
import langContext from '../Language/langContext'
import { useContext, useEffect, useState } from 'react'
import Scroll from '../Scroll'

export default function Projetos() {
    const { lang } = useContext(langContext);
    const [projetos, setProjetos] = useState<{
        "pt-BR": {
            "nome": string,
            "desc": string
        },
        "en-US": {
            "nome": string,
            "desc": string
        },
        "techs": [],
        "link": "https://danielmassaroni.github.io", "git": "https://github.com/danielmassaroni/danielmassaroni.github.io",
        "imagem": "/projetos/PortDan.png"
    }[]>([]);

    useEffect(() => {
        fetch('/projetos.json')
            .then(response => response.json())
            .then(data => setProjetos(data))
            .catch(err => console.error("Erro ao carregar projetos:", err))
    }, [])

    return (
        <section className={styles.projetos + " fader2"}>
            <h2 className='typer'>{lang == 'pt-BR' ? "Projetos" : "Projects"}</h2>
            <div className={styles.cards}>
                {projetos.map(x =>
                    <Card imagem={x.imagem} nome={lang == "pt-BR" ? x['pt-BR'].nome : (lang == "en-US" ? x['en-US'].nome : "")} desc={lang == "pt-BR" ? x['pt-BR'].desc : (lang == "en-US" ? x['en-US'].desc : "")} techs={x.techs} link={x.link} git={x.git} />
                )}
                <Scroll></Scroll>
            </div>
        </section>
    )
}