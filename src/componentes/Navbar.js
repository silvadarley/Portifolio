import styles from './Navbar.module.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li>
                    <Nav.Link href='#Presentation'>
                        Apresentação
                    </Nav.Link>
                </li>

                <li>
                    <Nav.Link href='#Skills'>
                        Habilidades
                    </Nav.Link>
                </li>

                <li>
                    <Nav.Link href='#Project'>
                        Projetos
                    </Nav.Link>
                </li>
            </ul>

            <ul>
                <li>
                    <a target='_blank' href='https://github.com/silvadarley'>
                        <FaGithub size={30}/>
                    </a>
                </li>

                <li>
                    <a target='_blank' href='https://www.linkedin.com/in/darleysilva/'>
                        <FaLinkedin size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar