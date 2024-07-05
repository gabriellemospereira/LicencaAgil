import React, {useState, useEffect} from "react";
import './SliderUm.css'

import { Swiper, SwiperSlide} from 'swiper/react'
import {  Autoplay, Navigation, Pagination } from 'swiper/modules'

import trabalhoo1 from '../../Img/lemoscinco.jpg';
import trabalhoo2 from '../../Img/contato.jpg';
import trabalhoo3 from '../../Img/contatodois.jpg';

export default function SliderUm(){

    const [sliderPerView, setSlidePerView] = useState(1)

    const data = [

        {id: '1', image: trabalhoo1},
        {id: '2', image: trabalhoo2},
        {id: '3', image: trabalhoo3},
    ]

    useEffect(() =>{
        function handleResize(){
            if(window.innerWidth < 720){
                setSlidePerView(1)
            }else{
                setSlidePerView(1)
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize)

        return () =>{
            window.removeEventListener("resize", handleResize)
        }

    }, [])

            return(
            <div>
            <div className="slider-box">

            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
        //     modules={[Autoplay, Pagination, Navigation]}
        //     // effect="Autoplay"
        //     spaceBetween={30}
        // centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        //       slidesPerView={1}
        //       pagination={{clickable: true}}
        //       navigation={true}
            >
                {data.map( (item) => (
                    <SwiperSlide key={item.id}>
                        <img
                        src={item.image}
                        alt="Slider"
                        className="slide-item"
                        ></img>
                    </SwiperSlide>
                ))}
            </Swiper>

            </div>
            </div>
    )
}