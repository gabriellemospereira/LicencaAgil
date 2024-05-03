import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from '../Pages/Login'
import Register from '../Pages/Register'
import RecuperarSenha from '../Pages/RecuperarSenha';
import Body from '../Pages/Body'
import Footer from '../Pages/Footer'
import HeaderLogo from '../Pages/HeaderLogo'
import Header from '../Pages/Header';
import TelaPrincipal from '../Pages/TelaPrincipal';
import Contato from '../Pages/Contato';
import Sobre from '../Pages/Sobre';
import CadastroEmpresa from '../Pages/CadastroEmpresa';
import PesquisaEmpresa from '../Pages/PesquisaEmpresa';
import SliderUm from '../Pages/SliderUm';
import SliderDois from '../Pages/SlideDois';
import Visao from '../Pages/Body/Visao'
import Lista from '../Pages/Body/Lista';
import Grafico from '../Pages/Body/Grafico';
import Comparacao from '../Pages/Body/Comparacao';





export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login></Login>}/>
                <Route path="register" element={<Register></Register>}/>
                <Route path="body" element={<Body></Body>}/>
                <Route path="footer" element={<Footer></Footer>}/>
                <Route path="headerLogo" element={<HeaderLogo></HeaderLogo>}/>
                <Route path="recuperarsenha" element={<RecuperarSenha></RecuperarSenha>}/>
                <Route path="telaprincipal" element={<TelaPrincipal></TelaPrincipal>}/>
                <Route path='header' element={<Header></Header>}></Route>
                <Route path='contato' element={<Contato></Contato>}></Route>
                <Route path='sobre' element={<Sobre></Sobre>}></Route>
                <Route path='cadastroempresa' element={<CadastroEmpresa></CadastroEmpresa>}></Route>
                <Route path='pesquisaempresa' element={<PesquisaEmpresa></PesquisaEmpresa>}></Route>
                <Route path='sliderum' element={<SliderUm></SliderUm>}></Route>
                <Route path='visao' element={<Visao></Visao>}></Route>
                <Route path='lista' element={<Lista></Lista>}></Route>
                <Route path='grafico' element={<Grafico></Grafico>}></Route>
                <Route path='comparacao' element={<Comparacao></Comparacao>}></Route>
                <Route path='sliderdois' element={<SliderDois></SliderDois>}></Route>
            </Routes>
        </BrowserRouter>
    )
}