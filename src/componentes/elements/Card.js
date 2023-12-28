import styles from './Card.module.css';
import ButtonB from './ButtonB';
import { useState } from 'react';



function Card({imagem, title, site, tecnologia, descricao, repositorio}){

    const [info, setInfo] = useState(false)

    function InfoOn(){
        setInfo(true)
    }

    function infoOff(){
        setInfo(false)
    }

    return(
        <div onMouseLeave={infoOff} className={styles.card}>
            <a 
                onMouseEnter={InfoOn}
                target='_blank' 
                rel="noreferrer" 
                href={site}
            >
                <img src={imagem} alt='Error'></img>
            </a>

            {info === true &&
                (
                    <section>
                        <h2>Titulo: {title}</h2>
                        <p>
                            Tecnologia: 
                            <br/>
                            {tecnologia}
                        </p>

                        <p> 
                            Descrição:
                            <br/>
                            {descricao}
                        </p>

                        <ButtonB 
                            text='Acesse meu projeto aqui!' 
                            link={repositorio}
                        />

                    </section>
                )
            }
        </div>
    )
}

export default Card