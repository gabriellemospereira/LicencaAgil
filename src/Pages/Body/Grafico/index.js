import React from "react";
import './Grafico.css'

import HeaderLogo from "../../HeaderLogo";
import Header from "../../Header";
import Footer from "../../Footer";
import EmpresaA from "./EmpresaA";
import EmpresaB from "./EmpresaB";
import EmpresaC from "./EmpresaC";
import EmpresaD from "./EmpresaD";

export default function Grafico(){

    

    return(
        <div>
            <HeaderLogo></HeaderLogo>
            <Header></Header>
     

                <div className="caixagrafico">
                    <EmpresaA></EmpresaA>
                    <EmpresaB></EmpresaB>
                    <EmpresaC></EmpresaC>
                    <EmpresaD></EmpresaD>
                </div>

         
        
            

            <Footer></Footer>
        </div>
    )
}