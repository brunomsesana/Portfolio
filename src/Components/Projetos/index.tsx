import styles from './Projetos.module.css'
import Card from '../Card'
import imgDaniel from './../../assets/projetos/PortDan.png'
import imgLuise from './../../assets/projetos/Fortuidade.png'
import imgCoCSheet from './../../assets/projetos/Ficha Automatica de Call of Cthulhu.png'
import imgFinanceiro from './../../assets/projetos/Financeiro.png'
import imgPortfolio from './../../assets/projetos/Portfolio.png'
import langContext from '../Language/langContext'
import { useContext } from 'react'
import Scroll from '../Scroll'

export default function Projetos(){
    const { lang } = useContext(langContext);
    return (
        <section className={styles.projetos + " fader2"}>
            <h2 className='typer'>{lang == 'pt-BR' ? "Projetos" : "Projects"}</h2>
            <div className={styles.cards}>
                <Card imagem={imgDaniel} nome={lang == 'pt-BR' ? 'Portfólio - Daniel Massaroni' : "Portfolio - Daniel Massaroni"} desc={lang == 'pt-BR' ? 'Desenvolvimento do Portfólio de fotografia para o fotografo Daniel Massaroni': "Developement of a photography portfolio for Daniel Massaroni"} techs={["HTML", "CSS", "JS", "JQuery"]} link='https://danielmassaroni.github.io' git='https://github.com/danielmassaroni/danielmassaroni.github.io'/>
                <Card imagem={imgLuise} nome='Landing Page - Luise Caprini' desc={lang == 'pt-BR' ? 'Desenvolvimento de site para a Psicóloga Luise Caprini':"Website development for the psychologist Luise Caprini"} techs={["HTML", "CSS", "JS", "JQuery"]} link='https://luisecaprini.github.io' git='https://github.com/luisecaprini/luisecaprini.github.io'></Card>
                <Card imagem={imgPortfolio} nome={lang == "pt-BR" ? "Meu Portfólio" : "My Portfolio"} desc={lang == "pt-BR" ? "Site desenvolvido para demonstrar meu trabalho como programador (É esse site que você tá vendo agora! 👀)" : "Website developed to show my work as a developer (It's the site you are on right now! 👀)"} techs={["React", "TS", "CSS"]} git='https://github.com/brunomsesana/Portfolio' link='https://brunomsesana.com.br'></Card>
                <Card imagem={imgCoCSheet} nome={lang == 'pt-BR' ? 'Ficha Automática Call of Cthulhu' : "Call of Cthulhu Automatic Sheet"} desc={lang == 'pt-BR' ? 'Site fan-made para facilitar o uso da ficha de RPG (Jogo de interpretação) do sistema Call of Cthulhu' : "Fan-made website to make the Call of Cthulhu RPG (Role-Playing Game) system's sheet easier to use"} techs={["HTML", "CSS", "JS", "Bootstrap"]} link='https://brunomsesana.com.br/CoCSheet' git='https://github.com/brunomsesana/Portfolio/tree/main/CoCSheet'></Card>
                <Card imagem={imgFinanceiro} nome={lang == 'pt-BR' ? 'Controle Financeiro' : "Financial Control"} desc={lang == 'pt-BR' ? 'Site desenvolvido como estudo para controle financeiro, com exportação para excel e calculos automáticos' : "Website developed for the study of HTML, CSS, JavaScript and simple data manipulation, with excel exporting and automatic calculations"} techs={["HTML", "CSS", "JS", "SheetJS"]} git='https://github.com/brunomsesana/Financeiro' link='https://brunomsesana.github.io/Financeiro'></Card>
                <Scroll></Scroll>
            </div>
        </section>
    )
}