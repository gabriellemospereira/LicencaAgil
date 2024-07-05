import React from "react";
import './Header.css'

import {Link} from 'react-router-dom';


export default function Header(){
    return(
<div>

<div className="info-header">
<header>
<Link className="title"  to="/telaprincipal">Home</Link>
<li class="dropdown">
<a  href="javascript:void(0)" class="dropbtn">Serviços</a>
<div class="dropdown-content">
{/* <Link to="/formularioempresa">Formulários das empresas</Link> */}
<Link to="/cadastroempresa">Cadastramento de novas empresas</Link>
<Link to="/pesquisaempresa">Pesquisa por categoria de empresas</Link>
</div>
</li>
<Link className="title"  to="/sobre">Sobre</Link>
<Link className="title"  to="/contato">Contato</Link>
</header>



</div>




</div>
    )
}