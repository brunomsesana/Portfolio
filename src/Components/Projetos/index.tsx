import styles from './Projetos.module.css'
import Image from '../Image'
import Card from '../Card'
import imgDaniel from './../../assets/projetos/PortDan.png'

export default function Projetos(){
    return (
        <section className={styles.projetos + " fader"}>
            <h2>Projetos</h2>
            <div className={styles.cards}>
                <Card imagem={imgDaniel} nome='Portfolio - Daniel' desc='Desenvolvimento do Portfólio de fotografia para o fotografo Daniel Massaroni' techs={["HTML", "CSS", "JS", "JQuery"]} link='https://danielmassaroni.github.io' git='https://github.com/danielmassaroni/danielmassaroni.github.io'/>
            </div>
        </section>
    )
}