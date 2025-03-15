import styles from "./Contato.module.css"

export default function Contato(){
    return(
        <div className={styles.divForm + " fader"}>
            <div>
                <form className={styles.form} id="form" action="https://formspree.io/f/xzzprqrb" method="post">
                            <h2>Me mande uma mensagem!<br/>Te responderei assim que possível
                            </h2>
                            <div>
                                <label htmlFor="nome">Nome: </label>
                                <input type="text" name="nome" id="nome" required/>
                            </div>
                            <div>
                                <label htmlFor="email">Email: </label>
                                <input type="text" name="email" id="email" required/>
                            </div>
                            <div>
                                <label htmlFor="msg">Mensagem: </label>
                                <textarea name="msg" id="msg" required style={{resize: "none"}}></textarea>
                            </div>
                            <div>
                                <input type="submit"/>
                            </div>
                </form>
                <div>
                    <h2>Outras maneiras de contato:</h2>
                    <p>Celular/Whatsapp: <a href="https://wa.me/27998955070">(27)99895-5070</a><br></br>LinkedIn: <a href="https://linkedin.com/in/brunomsesana">brunomsesana</a><br></br>Github: <a href="https://github.com/brunomsesana">brunomsesana</a> <br></br> <a href="https://drive.google.com/file/d/1h35IV-WhaXx8MpjaRRyvYuPUMahelo78/view?usp=sharing">Curriculo - Bruno Machado</a></p>
                </div>
            </div>
        </div>
    );
}