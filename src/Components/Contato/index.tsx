import styles from "./Contato.module.css"
import { useContext } from 'react';
import langContext from '../Language/langContext';

export default function Contato(){
    const {lang} = useContext(langContext);
    return(
        <div className={styles.divForm + " fader"}>
            <div>
                <form className={styles.form} id="form" action="https://formspree.io/f/xzzprqrb" method="post">
                            <h2>{lang == 'pt-BR' ? "Me mande uma mensagem!" : "Send me a text!"}<br/>{lang == 'pt-BR' ? "Te responderei assim que possível" : "I'll answer as soon as possible"}
                            </h2>
                            <div>
                                <label htmlFor="nome">{lang == 'pt-BR' ? "Nome:" : "Name:"}</label>
                                <input type="text" name="nome" id="nome" required/>
                            </div>
                            <div>
                                <label htmlFor="email">Email: </label>
                                <input type="text" name="email" id="email" required/>
                            </div>
                            <div>
                                <label htmlFor="msg">{lang == 'pt-BR' ? "Mensagem:" : "Text:"} </label>
                                <textarea name="msg" id="msg" required style={{resize: "none"}}></textarea>
                            </div>
                            <div>
                                <input type="submit"/>
                            </div>
                </form>
                <div>
                    <h2>{lang == 'pt-BR' ? "Outras maneiras de contato:" : "Other ways to get in touch:"}</h2>
                    <p>{lang == 'pt-BR' ? "Celular/Whatsapp:" : "Phone/Whatsapp:"} <a href="https://wa.me/+5527998955070">+55 27 99895-5070</a><br></br>LinkedIn: <a href="https://linkedin.com/in/brunomsesana">brunomsesana</a><br></br>Github: <a href="https://github.com/brunomsesana">brunomsesana</a> <br></br> <a href="https://drive.google.com/file/d/1h35IV-WhaXx8MpjaRRyvYuPUMahelo78/view?usp=sharing">{lang == 'pt-BR' ? "Curriculo - Bruno Machado" : "CV - Bruno Machado"}</a></p>
                </div>
            </div>
        </div>
    );
}