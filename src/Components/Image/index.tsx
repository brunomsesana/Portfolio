import styles from './Image.module.css';

export default function Image({source} : {source: string}){
    return(
        <img src={source} className={styles.img}/>
    )
}