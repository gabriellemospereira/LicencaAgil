import React from "react";
import './Body.css'

import { Link } from "react-router-dom";

import visao from '../../Img/olhodois.svg';
import map from '../../Img/map.svg';
import hands from '../../Img/hands.svg';
import lista from '../../Img/lista.svg'
import grafico from '../../Img/grafico.svg'
import comparacao from '../../Img/arrow.svg'
import calendario from '../../Img/calendar.svg'


export default function Body(){
    return(
        <div>

<div className="bloco-maior">

<Link to="/visao">
<div className="bloco">
<div><img className="icone" src={map}></img></div>
<div>
<h1>Mapas</h1>
</div>
</div>
</Link>

<Link to="/grafico">
<div className="bloco">
<div><img className="icone" src={grafico}></img></div>
<h1>Gráficos das Empresas</h1>
</div>
</Link>

<Link to="/comparacao">
<div className="bloco">
<div><img className="icone" src={hands}></img></div>
<h1>Contratos</h1>
</div>
</Link> 

<Link to="/calendario">
<div className="bloco">
<div><img className="icone" src={calendario}></img></div>
<h1>Calendário</h1>
</div>
</Link> 

</div>

<br></br>
<h1 className="parceiro">Parceiros:</h1>
            
        </div>
    )
}