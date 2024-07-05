import React, {useState} from "react";
import './Login.css'

import { Link } from "react-router-dom";
import Icone from '../../Img/linkremove.png';

export default function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(e){
        e.preventDefault()

       if(email !== '' && password !== ''){
        alert("teste")
       }else{
        alert("Prencha todos os campos")
       }

    }

    return(
        <div className="home-container">
        <div className="login-container">
            <div className="caixa-login">
            <img className="link" src={Icone} alt="img of icon"></img>
                {/* <h1>Login</h1> */}
                {/* <span>Para acessar, preencha abaixo seu e-mail e sua senha.</span> */}
                <form className="forma" onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Digite seu email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <input
                    autoComplete={false}
                    type="password"
                    placeholder="*****"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <Link to="/telaprincipal"><button>Acessar</button></Link>
                </form>
                  <Link to="/register" className="button-link">Não possui uma conta? Cadastre-se</Link>
                    <Link to="/recuperarsenha" className="button-link">Esqueci a senha?!</Link>
            </div>
        </div> 
    </div>
    )
}