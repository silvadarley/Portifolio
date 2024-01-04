import styles from './Presentation.module.css';
import ButtonA from '../elements/ButtonA';
import {useEffect, useState} from 'react';
import foto from '../../Imagens/Fotos/darleyRosto.png';


function Presentation(){

    const dataAtual = new Date();
    const dataNascimento = new Date('1987-01-22');
    // Calculando a diferença de anos
    const diferencaAnos = dataAtual.getFullYear() - dataNascimento.getFullYear();

    // Verificando se o aniversário já ocorreu este ano
    const aniversarioOcorreu = (
        dataAtual.getMonth() > dataNascimento.getMonth() ||
        (
            dataAtual.getMonth() === dataNascimento.getMonth() && 
            dataAtual.getDate() >= dataNascimento.getDate()
        )
    );

    // A idade é o ano atual menos o ano de nascimento, ajustado para o aniversário
    const idade = aniversarioOcorreu ? diferencaAnos : diferencaAnos - 1;



    const [text, setText] = useState('');
    const toRotate = [`Me chamo Darley Silva e tenho ${idade} anos.`,'E sou Desnvolvedor full-stack', 'Conheça um pouco mais sobre minha história profissional!'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 130;
    const [delta, setDelta] = useState(100);

    useEffect(()=>{
        let relogio = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(relogio)}
    }, [text])

    const toType = ()=>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);

        setText(updateText);

        if(!isDeleting &&updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updateText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }

    return(
        <div className={styles.Presentation}>
            <h4>
                <strong>Bem-vindo ao meu portifolio!</strong>
            </h4>
            
            <div>
                {/* <h1>Olá! Me chamo Darley e tenho 36 anos. </h1> */}
                {/* imagem={foto} */}
                {/* <img src='../../Imagens/Fotos/darleyRosto.png' alt="erro"></img> */}
                <img src={foto} alt="erro"></img>
                <h1>Olá! {text} </h1>
            </div>

            <p>
            Sou pai de dois filhos maravilhosos e sou apaixonado pelo mundo da tecnologia. 
            Formei-me em analise e desenvolimento de sistemas pela Universidade UNIPAC e 
            desde então tenho construído uma carreira sólida nessa área fascinante.
            </p>

            <p>
            Iniciei minha jornada profissional como analista de suporte na empresa Soft-Box, 
            onde era responsável por garantir a disponibilidade das aplicações de sistemas, 
            como emissão de nota fiscal, carta de conhecimento de transporte, entre outros, 
            utilizando monitoramento Nagios, por 11 meses, durante esse período, adquiri 
            habilidades valiosas para trilhar o meu caminho profissional.
            </p>

            <p>
            Há mais de 9 anos, integro a equipe da Secretaria de Saúde do município de Uberlândia. 
            Iniciei minhas atividades em abril de 2014, assumindo diversas responsabilidades, incluindo 
            a aplicação dos meus conhecimentos na análise de requisitos para o desenvolvimento de um 
            sistema de controle de frota e organização de rotas para chamados de carros. Nesse contexto, 
            contribuí ativamente para a modelagem de uma base de dados relacional, escrevi scripts SQL 
            para aprimorar o sistema de frota, utilizando a tecnologia Oracle 11G, e fui responsável 
            pelo desenvolvimento parcial da aplicação em C#, o que resultou no aprimoramento das minhas 
            habilidades de programação.
            </p>

            <p>
            Durante esse período, desempenhei um papel fundamental em projetos importantes, inicialmente 
            concentrando meus esforços no desenvolvimento de aplicações voltadas para a melhoria da qualidade 
            no atendimento da saúde. Minhas responsabilidades abrangeram análise de requisitos, modelagem, 
            desenvolvimento e migração de base de dados. Destaco minha participação na análise da base de 
            dados de uma ferramenta fornecida pelo Ministério da Saúde, utilizada para o registro de pacientes 
            na rede de atenção primária. Nesse contexto, elaborei relatórios que atendiam às necessidades da 
            Secretaria, proporcionando uma apresentação eficiente e qualitativa dos dados de atendimento de 
            pacientes. Essa experiência fortaleceu minha trajetória profissional, consolidando habilidades em 
            diferentes áreas da tecnologia da informação e contribuindo para o avanço e eficiência da organização.
            </p>

            <p>
            Espero ter a oportunidade de compartilhar minha expertise e colaborar em projetos desafiadores. 
            Estou aberto a novas oportunidades e ansioso para enfrentar os próximos desafios que me aguardam. 
            Obrigado por conhecer um pouco sobre mim!
            </p>

            <ButtonA link={`https://www.linkedin.com/in/darleysilva/`}
                text='Conecte-se comigo!'/>


        </div>
    )
}

export default Presentation