import React from "react";
import './RecuperarSenha.css'

import { Link } from "react-router-dom";
// import Icone from '../../Img/linkremove.png';

export default function RecuperarSenha(){

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
        <div className="recuperar-container">
        <div className="register-login">
            <div className="caixa-recuperar">
            {/* <img className="link" src={Icone} alt="img of icon"></img> */}
                 <h2 className="txt">Preencha abaixo com seu email para receber as instruções necessárias para criar uma nova senha </h2>  
                 
                <form className="forma">

             

              

                <label className="nomes">Email:</label>
                <input
                    type="text"
                    // placeholder="Digite seu email..."
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    
                

                    <button type="submit">Enviar</button>
                </form>
                <Link to="/" className="button-link">Voltar para tela principal</Link>
           
            </div>
        </div> 
    </div>
    )
}