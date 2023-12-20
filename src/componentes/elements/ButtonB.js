import styles from './ButtonB.module.css'

function ButtonB({text, link}){
    return(
        <div>
            <a 
                target='_blank' 
                rel="noreferrer" 
                href={link}
            >
                <button 
                    type="button" 
                    className={styles.btn}
                >
                    {text}
                </button>
            </a>
        </div>
    )
}

export default ButtonB