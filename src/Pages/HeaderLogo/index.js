import React from "react";
import './Header.css'

import Icone from '../../Img/linkremove.png';

export default function HeaderLogo(){
    return(
        <div>
            <div className="logo-header">
                <div className="right-header">
                <img className="agil" src={Icone} alt="img of icon"></img>
                        <input
                        className="search"
                        type="text"
                        placeholder="Procure aqui..."
                        />
                </div>
            </div>
        </div>
    )
}