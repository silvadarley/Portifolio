import styles from './Card.module.css';
import ButtonB from './ButtonB';


function Card({imagem, title, site, tecnologia, descricao, repositorio}){
    return(
        <div className={styles.card}>
            <a 
                target='_blank' 
                rel="noreferrer" 
                href={site}
            >
                <img src={imagem} alt='Error'></img>
            </a>

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
        </div>
    )
}

export default Card