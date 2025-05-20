import styles from "./button.module.css"

export function Botton({func, text}){


    return(
        <button className={styles.button} onClick={func}>{!text? "perfil" :" Habilidades"}</button>
    )
}