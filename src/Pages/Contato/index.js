import React from "react";
import './Contato.css'

import HeaderLogo from "../HeaderLogo";
import Header from "../Header";
import Footer from "../Footer";

import ideia from '../../Img/contatosete.jpg'

export default function Contato(){
    return(
        <div>
            <HeaderLogo></HeaderLogo>
            <Header></Header>

            <div className="sobre-container">

<div className="row">
    <div className="contato-column">
        <img className="contato-foto" src={ideia} alt="image of ideia"></img>
    </div>
    <div className="contato-66">
        <h1 className="xlarge-font"><b>Fale conosco!</b></h1>
        <h3 className="contato-large"><b>Siga as instruções abaixo para falar sobre o conteúdo do site, questões técnicas entre outros</b></h3>
        <p className="texto">
        A equipe de atendimento da Lemos Tech trabalha de <b>segunda a sexta, das 9h às 18h</b>, para atender as solicitações dos usuários em até dois dias úteis.
        </p>
        <p className="texto">
        Se o motivo do seu contato está relacionado à área técnica, problemas que podem 
        ocorrer no sistema, dúvidas, sugestões, poderá entrar em contato diretamente com o time de desenvolvedores pelo <b>WhatsApp +55 43 99164468</b> ou mandar email para: <b>lemostech@gmail.com</b>
        </p>
        <p className="texto">
        Se o motivo do seu contato está relacionado à área comercial como desenvolvimento de WebSites, venda de Software, entre outros, escreva para <b>lemostech@gmail.com</b>
        </p>
        <p className="texto">
            Sendo assim, esperamos abreviar as nossas comunicações para um bom funcionamento 
            de ambas as partes.
            </p>
      
    </div>
</div>
</div>
           
            <Footer></Footer>
        </div>
    )
}