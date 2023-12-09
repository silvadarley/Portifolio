import styles from './ButtonB.module.css'

function ButtonB({text}){
    return(
        <div>
            <buttun className={styles.btn}>
                {text}
            </buttun>
        </div>
    )
}

export default ButtonB