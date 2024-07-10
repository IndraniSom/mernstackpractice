"use client"
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"
const Home: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    arrows:false,
  };

  const banners = [
    "/assets/banner1.png",
    "/assets/banner2.png",
    "/assets/banner3.png",
  ];

  
  

  return (
    <div className='relative w-full'>
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className='w-full h-[650px]'>
            <Image src={banner} className='w-full h-full object-cover' alt={`Banner ${index + 1}`} width={1000} height={1000}/>
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
