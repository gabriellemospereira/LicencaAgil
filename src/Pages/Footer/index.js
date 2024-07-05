import React from "react";
import './Footer.css'

import Icone from '../../Img/linkremove.png';
import instagram from '../../Img/instagrambranco.svg'


export default function Footer(){
    return(
        <div>
            <div className="footer">
            <div className="sub-footer">
                {/* <img className="agil" src={Icone} alt="img of icon"></img> */}
                <div className="dados">
                    <h1>LEMOS TECH</h1>
                    <h2>CNPJ: 47.144.263/0001-38</h2>
                    <p>Rua José Roque Salton, 430 Terra Bonita - 86-047622 - Londrina - PR</p>
                    <p>Telefone: (43) 991164468</p>
                </div>

                {/* <div className="dados">
                    <h1>Siga-nos nas redes sociais!</h1>
                    <h2>Clique abaixo sesguir</h2>
                    <h2>Clique abaixo sesguir</h2>
                    <img className="social" src={instagram} alt="img of icon"></img>
                    
                </div> */}

                

                </div>
            </div>
        </div>
    )
}