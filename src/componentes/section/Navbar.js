import styles from './Navbar.module.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    function toggleNav() {
        var x = document.querySelector(".navbar .link");
        if (x.style.display === "flex") {
            x.style.display = "none";
        } else {
            x.style.display = "flex";
        }
    }
    
    return(
        <div className={styles.navbar}>

            <div class="icones">
                <!-- Ícone de hambúrguer -->
                <div class="hamburguer" onclick="toggleNav()">&#9776;</div>
            </div>
        
            <ul className={styles.link}>
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
            </ul >

            <ul className={styles.icones}>
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
                            
        </div>
    )
}



export default Navbar
