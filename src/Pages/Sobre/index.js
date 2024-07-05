import React from "react";
import './Sobre.css'

import HeaderLogo from "../HeaderLogo";
import Header from "../Header";
import Footer from "../Footer";

import fotoideia from '../../Img/ideia.jpg'

export default function Sobre(){
    return(
        <div>
            <HeaderLogo></HeaderLogo>
            <Header></Header>
            <div>
                <div className="sobre-container">

                    <div className="row">
                        <div className="column-33">
                            <img className="foto-ideia" src={fotoideia} alt="image of ideia"></img>
                        </div>
                        <div className="column-66">
                            <h1 className="xlarge-font"><b>A grande ideia!</b></h1>
                            <h3 className="large-font"><b>Sobre a Lemos Tech</b></h3>
                            <p className="texto"><span>A ideia para a criação da empresa </span>
                             Lemos Tech surgiu em um evento de <i>Hackathon</i> feito pelo SEBRAE e o Sescap de Londrina, onde nós tivemos uma ideia para trazer uma solução para agilizar todo o processo para a liberação de alvará de funcionamento das empresas.
                            </p>
                            <p className="texto">
                            Em parceria com o Sebrae, Sescap e a prefeitura de Londrina nós desenvolvemos esse sistema chamado <b>Licença Ágil</b> no qual possibilita as empresas de contabilidade cadastrar informações das diversas empresas que precisam do alvará de funcionamento, e em conjunto com a prefeitura consigam armazenar essas informações e assim trazendo mais agilidade para toda demanda desse processo.
                            </p>
                            <p className="texto">
                                Sendo assim e com essa excelente iniciativa, esperamos poder trazer não só agilidade para as empresas, como também, uma comunicação efetiva, proporcionar um execelente funcionamento do sistema, proporcionar também novas opções/inovações que há no mercado, agilizar as inúmeras demandas etc.  
                                </p>
                          
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}