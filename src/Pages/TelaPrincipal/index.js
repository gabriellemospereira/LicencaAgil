import React from "react";
import './TelaPrincipal.css'


import HeaderLogo from "../HeaderLogo";
import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";
import SliderUm from "../SliderUm";
import SlideDois from "../SlideDois";

export default function TelaPrincipal(){
    return(
        <div>
            <HeaderLogo></HeaderLogo>
            <Header></Header>
            <SliderUm></SliderUm> 
            <Body></Body>
            <SlideDois></SlideDois>
            <Footer></Footer>
        </div>
    )
}