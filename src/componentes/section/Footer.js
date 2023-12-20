import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css';

function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li>
                    <a 
                        target='_blank' 
                        href='https://github.com/silvadarley'
                    >
                        <FaGithub size={30}/>
                    </a>
                </li>

                <li>
                    <a 
                        target='_blank' 
                        rel="noreferrer" 
                        href='https://www.linkedin.com/in/darleysilva/'
                    >
                        <FaLinkedin size={30}/>
                    </a>
                </li>
            </ul>
            <p>darleysilva@ymail.com</p>
            <p>Darley Silva © 2023</p>
        </div>
    )
}

export default Footer