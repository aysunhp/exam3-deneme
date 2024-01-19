import React from 'react'
import "./hero.scss"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Hero = () => {
  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={0}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide><div className="hero hero1">
        <div className="container">
        <h1>  Tasty & Delicious Food</h1>
          <button>Book a table</button>
            </div></div></SwiperSlide>
    <SwiperSlide><div className="hero hero2">
        <div className="container">
          
          <h1>  Tasty & Delicious Food</h1>
          <button>Book a table</button>
            </div></div></SwiperSlide>
    <SwiperSlide><div className="hero hero3">
        <div className="container">
        <h1>  Tasty & Delicious Food</h1>
          <button>Book a table</button>
            </div></div></SwiperSlide>
 
  </Swiper>
  )
}

export default Hero