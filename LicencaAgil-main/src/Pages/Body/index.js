import React from "react";
import './Body.css'

import { Link } from "react-router-dom";

import visao from '../../Img/olhodois.svg';
import lista from '../../Img/lista.svg'
import grafico from '../../Img/grafico.svg'
import comparacao from '../../Img/arrow.svg'

export default function Body(){
    return(
        <div>

<div className="bloco-maior">

<Link to="/visao">
<div className="bloco">
<div><img className="icone" src={visao}></img></div>
<div>
<h1>Visão Geral</h1>
</div>
</div>
</Link>

{/* <Link to="/lista">
<div className="bloco">
<div><img className="icone" src={lista}></img></div>
<h1>Lista das Empresas</h1>
</div>
</Link> */}

<Link to="/grafico">
<div className="bloco">
<div><img className="icone" src={grafico}></img></div>
<h1>Gráficos das Empresas</h1>
</div>
</Link>

<Link to="/comparacao">
<div className="bloco">
<div><img className="icone" src={comparacao}></img></div>
<h1>Comparação do Setor</h1>
</div>
</Link>

</div>

<br></br>
<h1 className="parceiro">Parceiros:</h1>
            
        </div>
    )
}