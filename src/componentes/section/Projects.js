import ButtonB from '../elements/ButtonB';
import styles from './Projects.module.css'
import Card from '../elements/Card';

import ccxp from '../../Imagens/Cards/ccxp.png';
import arquitetura from '../../Imagens/Cards/Arquitetura.png'
import buscaPais from '../../Imagens/Cards/buscaPais.png';
import landingPage from '../../Imagens/Cards/landingPage.png'

function Project(){
    return(
        <div className={styles.projects} id="Project">
            <h1>Projetos</h1>
            
            <Card 
                imagem={ccxp} 
                url={'https://ccxpdarley.netlify.app/'} 
                tecnologia={'Tecnologias tulizadas são: (Html 5, Css 3 e JavaScript.'}
                descricao={'Aulas de JavaScript e CSS'}
            />

            <Card imagem={arquitetura} url={'https://desafio01dnc.netlify.app/'}/>

            <Card imagem={buscaPais} url={'https://buscadordepaisdarley.netlify.app/'}/>

            <Card imagem={landingPage} url={'https://landingpagedasaulas.netlify.app//'}/>

            <ButtonB 
                text='Acesse meu repositório' 
                link={'https://github.com/silvadarley?tab=repositories'}
            />

        </div>
    )
}

export default Project