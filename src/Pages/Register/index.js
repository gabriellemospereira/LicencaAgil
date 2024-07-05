import React from "react";
import './Register.css'

import { Link } from "react-router-dom";
// import Icone from '../../Img/linkremove.png';

export default function Register(){

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // function handleLogin(e){
    //     e.preventDefault()

    //    if(email !== '' && password !== ''){
    //     alert("teste")
    //    }else{
    //     alert("Prencha todos os campos")
    //    }

    // }

    return(
        <div className="register-container">
        <div className="register-login">
            <div className="caixa-register">
            {/* <img className="link" src={Icone} alt="img of icon"></img> */}
                {/* <h1>Preencha os </h1>  */}
                 {/* <span>Para o cadastro, preencha com as informações necessárias</span>  */}
                <form className="forma">

                <label className="nomes">Nome Completo:</label>
                <input
                    type="text"
                    // placeholder="Digite seu email..."
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    ></input>

                <label className="nomes">CPF:</label>
                <input
                    type="text"
                    // placeholder="Digite seu email..."
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    ></input>

                <label className="nomes">Email:</label>
                <input
                    type="text"
                    // placeholder="Digite seu email..."
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    
                    <label className="nomes">Senha:</label>
                    <input
                    autoComplete={false}
                    type="password"
                    placeholder="*****"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    ></input>

                    <label className="nomes">Digite novamente a senha:</label>
                    <input
                    autoComplete={false}
                    type="password"
                    placeholder="*****"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    ></input>

                    <button type="submit">Cadastrar</button>
                </form>
                <Link to="/" className="button-link">Já sou cadastrado, voltar para tela principal</Link>
           
            </div>
        </div> 
    </div>
    )
}