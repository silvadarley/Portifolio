import styles from './Card.module.css'
import ButtonB from './ButtonB';


function Card({imagem, url, tecnologia, descricao}){
    return(
        <div className={styles.card}>
            <img src={imagem}></img>

            <section>
                <h2>Titulo</h2>
                <p>
                    Tecnologia: 
                    <p>{tecnologia}</p>
                </p>
                <p>Descrição: 
                    <br/>{descricao}
                </p>

                <ButtonB text='Acesse o projeto aqui!' link={url}/>
            </section>
        </div>
    )
}

export default Card