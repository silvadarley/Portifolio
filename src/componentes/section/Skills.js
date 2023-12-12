import style from './Skills.module.css';
import javascript from '../../Imagens/Skills/JavaScript.svg';
import css3 from '../../Imagens/Skills/css3.svg';
import html from '../../Imagens/Skills/html.svg';
import react from '../../Imagens/Skills/react.svg';
import typeScript from '../../Imagens/Skills/typeScrypt.svg';
import cSharp from '../../Imagens/Skills/C_Sharp_Icon.png';
import oracle from '../../Imagens/Skills/oracle.png';
import sqlserver from '../../Imagens/Skills/sql-server.png';
import MySql from '../../Imagens/Skills/Mysql.png';

function Skills(){
    return(
        <div className={style.Skills} id="Skills">
            <h1>Habilidades</h1>
            
            <p>Conheça um pouco mais das minhas principais habilidades e conhecimentos</p>
            
            <div>
                <div className={style.tooltip}>
                    <img className={style.img} src={cSharp}/>
                    <span className={style.tooltiptext}>C# (C Charp)</span>
                </div>
                
                <div className={style.tooltip}>
                    <img className={style.img} src={html}/>
                    <span className={style.tooltiptext}>HTML 5</span>
                </div>
                
                <div className={style.tooltip}>
                    <img className={style.img} src={css3}/>
                    <span className={style.tooltiptext}>CSS3</span>
                </div>

                <div className={style.tooltip}>
                    <img className={style.img} src={javascript}/>
                    <span className={style.tooltiptext}>JAVA SCRIPT</span>
                </div>
                
                <div className={style.tooltip}>
                    <img className={style.img} src={react}/>
                    <span className={style.tooltiptext}>REACT</span>
                </div>

                <div className={style.tooltip}>
                    <img className={style.img} src={typeScript}/>
                    <span className={style.tooltiptext}>TYPE SCRIPT</span>
                </div>

                <div className={style.tooltip}>
                    <img className={style.img} src={oracle}/>
                    <span className={style.tooltiptext}>ORACLE</span>
                </div>

                <div className={style.tooltip}>
                    <img className={style.img} src={sqlserver}/>
                    <span className={style.tooltiptext}>Sql Server</span>
                </div>

                <div className={style.tooltip}>
                    <img className={style.img} src={MySql}/>
                    <span className={style.tooltiptext}>MySql</span>
                </div>
                
            </div>
        </div>
    )
}

export default Skills