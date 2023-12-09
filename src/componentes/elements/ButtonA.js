import styles from './ButtonA.module.css'

function ButtonA({text}){
    return(
        <div>
            <buttun className={styles.btn}>
                {text}
            </buttun>
        </div>
    )
}

export default ButtonA