import styles from './ButtonB.module.css'

function ButtonB({text, link}){
    return(
        <div>
            <a href={link}>
                <buttun className={styles.btn}>
                    {text}
                </buttun>
            </a>
        </div>
    )
}

export default ButtonB