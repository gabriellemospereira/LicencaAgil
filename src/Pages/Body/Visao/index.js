import React from "react";
import './Visao.css'

import HeaderLogo from "../../HeaderLogo";
import Header from "../../Header";
import Footer from "../../Footer";
import Mapa from "../../../Img/mapadelondrina.jpg"

import {Link} from 'react-router-dom';

export default function Visao(){


    return(
        <div>
            <HeaderLogo></HeaderLogo>
            <Header></Header>

            <section className="section">
                <figure>
                <div className="mapa">
                    <img className="map" src={Mapa} useMap="#londrina"></img>
                </div>
                  
                </figure>
                    <map name="londrina">
                      
                    <Link to="/norte" target="_self">
                    <area href="/teste" target="_self"  shape="circle" coords="444, 226, 20"
                    title="Zona Norte. Essa região tem aproximadamente 5 mil pessoas etc.">
                    </area>
                    </Link>

                    <Link to="/leste" target="_self">
                    <area href="/teste" target="_self"  shape="circle" coords="628, 353, 20"
                    title="Zona Leste. Essa região tem aproximadamente 20 mil pessoas etc.">
                    </area>
                    </Link>

                    <Link to="/centro" target="_self">
                    <area href="/teste" target="_self"  shape="circle" coords="473, 397, 20"
                    title="Centro. Essa região tem aproximadamente 100 mil pessoas etc.">
                    </area>
                    </Link>

                    <Link to="/sul" target="_self">
                    <area href="/teste" target="_self"  shape="circle" coords="439, 591, 20"
                    title="Zona Sul, essa região tem aproximadamente 35 mil pessoas etc.">
                    </area>
                    </Link>

                    <Link to="/oeste" target="_self">
                    <area href="/teste" target="_self"  shape="circle" coords="269, 479, 20"
                    title="Zona Oeste. Essa região tem aproximadamente 140 mil pessoas etc.">
                    </area>
                    </Link>
                             
                    </map>
            </section>

            <Footer></Footer>
        </div>
    )
}