import React from 'react';
import ImageSlider from '../ui/ImageSwiper';

const imgSouces = ['/happy545_swiper.png', '/1250000000_red_swiper.png', '/1250000000_swiper.png'];
export default function Home() {
    return (
        <div>
            <ImageSlider images={imgSouces}></ImageSlider>
        </div>
    );
}
