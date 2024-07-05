import React from "react";
import './CadastroEmpresa.css';

import HeaderLogo from "../HeaderLogo";
import Header from "../Header";
import Footer from "../Footer";


export default function CadastroEmpresa(){
    return(
        <div>
            <HeaderLogo></HeaderLogo>
            <Header></Header>

            <div className="cadastro-form">
          
<form className="empresa-cadastro">


<div className="bloco-dois">

<div className="dois-a">

<label className="cadastro-label">RG:</label>
<input
className="dois-input"
type="text"></input>

<label className="cadastro-label">CPF:</label>
<input
className="dois-input"
type="text"></input>

<label className="cadastro-label">Título de Eleitor:</label>
<input
className="dois-input"
type="text"></input>

<label className="cadastro-label">Comprovante de Endereço Residencial:</label>
<input
className="cadastro-input"
type="file"></input>

<label className="cadastro-label">Comprovante de Endereço Comercial:</label>
<input
className="cadastro-input"
type="file"></input>

<label className="cadastro-label">Declaração de Imposto de Renda:</label>
<input
className="cadastro-input"
type="file"></input>

<label className="cadastro-label">Cópia do IPTU:</label>
<input
className="cadastro-input"
type="file"></input>

<label className="cadastro-label">Certidão de Casamento (caso seja casado(a)):</label>
<input
className="cadastro-input"
type="file"></input>

<label className="cadastro-label">Carteira do Órgão Regulamentador (OAB, CORE, CFM etc):</label>
<input
className="cadastro-input"
type="file"></input>

</div>
<div className="titulo-bloco">
<h1 className="empresarial">Documentos Pessoais</h1> 
</div>
</div>



<div className="bloco-dois">
<div className="dois-a">
<label className="cadastro-label">Cópia Simples do Endereço Comercial da Sede da Empresa:</label>
<input
className="cadastro-input"
type="file"></input>
<label className="cadastro-label">Cópia do IPTU (do local aonde está a sede da empresa):</label>
<input
className="cadastro-input"
type="file"></input>
<label className="cadastro-label">Código CNAE:</label>
<input
className="dois-input"
type="text"></input>
<label className="cadastro-label">Nome Fantasia da Empresa:</label>
<input
className="dois-input"
type="text"></input>
<label className="cadastro-label">Nome do Dono da Empresa:</label>
<input
className="dois-input"
type="text"></input>
</div>
<div className="titulo-bloco">
<h1 className="empresarial">Documentos Empresariais</h1> 
</div>
</div>

<button className="Empresa-BNT">Cadastrar</button>
</form>
               
</div>
       
            <Footer></Footer>
        </div>
    )
}