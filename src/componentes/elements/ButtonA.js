import styles from './ButtonA.module.css'

function ButtonA({text, link}){
    return(
        <div>
            <a target='_blank' href={link}>
                <buttun className={styles.btn}>
                    {text}
                </buttun>
            </a>
        </div>
    )
}

export default ButtonA