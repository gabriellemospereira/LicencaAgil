import React from "react";
import './Visao.css'

import HeaderLogo from "../../HeaderLogo";
import Header from "../../Header";
import Footer from "../../Footer";




export default function Visao(){


    return(
        <div>
            <HeaderLogo></HeaderLogo>
            <Header></Header>

            <section className="section">
               <h2>Processos</h2>
               <table border="4"></table>
                <thead>
                    <tr>
                        <th>Protocolo</th>
                        <th>Nome da empresa</th>
                        <th>tipo</th>
                        <th>Informações</th>
                    </tr>
                </thead>
                  
                    
            </section>

            <Footer></Footer>
        </div>
    )
}