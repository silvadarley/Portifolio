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
                title={'Pagina de Ingresso CCXP'}
                imagem={ccxp} 
                site={'https://ccxpdarley.netlify.app/'} 
                tecnologia={'Tecnologias tulizadas são: (Html 5, Css 3 e JavaScript)'}
                descricao={'Aulas de JavaScript e CSS'}
                repositorio={'https://github.com/silvadarley/desafioCCXP'}
            />

            <Card 
                title={'Aquiteto'}
                imagem={arquitetura} 
                site={'https://desafio01dnc.netlify.app/'}
                tecnologia={'Tecnologias tulizadas são: (Html 5, Css 3 e JavaScript)'}
                descricao={'Desafio proposto em aula, para criação de uma pagina de um profissional de arquitetura'}
                repositorio={'https://github.com/silvadarley/desafioDNC_LandingPage?tab=readme-ov-file'}
            />

            <Card 
                title={'Buscador de Paises'}
                imagem={buscaPais} 
                site={'https://buscadordepaisdarley.netlify.app/'}
                tecnologia={'Tecnologias tulizadas são: (Html 5, Css 3 e JavaScript)'}
                descricao={'Pagina construida com recursos do Bootstrap, consumindo uma API publica.'}
                repositorio={'https://github.com/silvadarley/BuscadorDePais'}
            />

            <Card 
                title={'Landing Page'}
                imagem={landingPage} 
                site={'https://landingpagedasaulas.netlify.app//'}
                tecnologia={'Tecnologias tulizadas são: (Html 5, Css 3 e JavaScript)'}
                descricao={'Desafio de criação da primeira pagina empregando os conhecmentos adiquiridos no curso da escola DNC.'}
                repositorio={'https://github.com/silvadarley/projeto-landing-page'}
            />

            <br/>

            <ButtonB 
                text='Acesse meu repositório!' 
                link={'https://github.com/silvadarley?tab=repositories'}
            />

        </div>
    )
}

export default Project