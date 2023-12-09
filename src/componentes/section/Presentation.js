import styles from './Presentation.module.css';
import ButtonA from '../elements/ButtonA';
import ButtonB from '../elements/ButtonB';


function Presentation(){
    return(
        <div className={styles.Presentation}>
            <h4>
                <strong>Bem-vindo ao meu portifolio!</strong>
            </h4>

            <h1>Olá! Me chamo Darley e tenho 36 anos. </h1>

            <p>
            Sou pai de dois filhos maravilhosos e sou apaixonado pelo mundo da tecnologia. <br/>
            Formei-me como analista de sistemas pela Universidade UNIPAC e desde então tenho <br/>
            construído uma carreira sólida nessa área fascinante.
            </p>

            <p>
            Minha jornada profissional começou na empresa Soft-Box, onde tive a oportunidade de <br/>
            trabalhar como analista de sistemas por 11 meses. Lá, adquiri habilidades valiosas e <br/>
            pude aplicar meus conhecimentos na análise de requisitos para o desenvolvimento de um <br/>
            sistema de controle de frota e organização de rotas para chamados de carros. Além disso, <br/>
            pude contribuir com a modelagem de uma base de dados relacional e escrever scripts SQL <br/>
            para o sistema de frota, utilizando a tecnologia Oracle 11G. Também fui responsável pelo <br/>
            desenvolvimento parcial da aplicação em C#, o que me permitiu aprimorar minhas habilidades <br/>
            de programação.
            </p>

            <p>
            Há mais de 9 anos, tenho tido a honra de fazer parte da equipe da Secretaria de Saúde <br/>
            do município de Uberlândia. Durante esse período, assumi diversas responsabilidades e <br/>
            desempenhei um papel fundamental em projetos importantes. Entre as atividades que realizei, <br/>
            destaco a implantação de sistemas de RH, Folha de pagamento, contábil e compras, bem como <br/>
            a migração de uma base de dados do SQL Server para o Postgre. Também fui responsável por <br/>
            implantar um sistema de chamados para clientes internos, utilizando o GLPI, o que trouxe <br/>
            maior agilidade e organização aos atendimentos. Além disso, prestei suporte e manutenção em <br/>
            redes de computadores, controlei o licenciamento de softwares e implantei um sistema mobile <br/>
            para o registro de atendimento de visitas de profissionais da saúde em atenção primária, o <br/>
            que otimizou e aprimorou o trabalho diário desses profissionais. Também atuei no suporte de <br/>
            um sistema de prontuário eletrônico, auxiliando na detecção de erros e problemas, garantindo <br/>
            seu uso eficiente e adequado.
            </p>

            <p>
            Ao longo dessa trajetória profissional, adquiri habilidades sólidas em análise de requisitos, <br/>
            modelagem de dados, desenvolvimento de aplicativos, administração de sistemas e suporte técnico. <br/>
            A cada novo desafio, sinto-me motivado a aprender mais e aprimorar minhas habilidades. <br/>
            Estou sempre em busca de novas oportunidades para contribuir para o avanço da tecnologia e para <br/>
            a eficiência das organizações.
            </p>

            <p>
            Além da minha paixão pela área de TI, também tenho diversos interesses e hobbies. Nos meus <br/>
            momentos de lazer, gosto de praticar esportes, ouvir música e viajar.
            </p>

            <p>
            Estou entusiasmado com o futuro e as possibilidades que ele reserva. Quero continuar crescendo <br/>
            profissionalmente e aplicar meus conhecimentos e experiências para contribuir de forma significativa <br/>
            no desenvolvimento de soluções tecnológicas inovadoras. 
            </p>

            <p>
            Espero ter a oportunidade de compartilhar minha expertise e colaborar em projetos desafiadores. <br/>
            Estou aberto a novas oportunidades e ansioso para enfrentar os próximos desafios que me aguardam. <br/>
            Obrigado por conhecer um pouco sobre mim!
            </p>

            <ButtonA text="Botão A"/>
            <br/><br/><br/><br/>
            <ButtonB text="Botão B"/>

        </div>
    )
}

export default Presentation