import React from 'react';
import ImageSlider from '../ui/ImageSlider';
import YoutubeVideo from '../ui/YoutubeVideo';
import AdditionalImages from '../ui/AdditionalImages';

const imgSliderSrc = [
    '/images/happy545_swiper.png',
    '/images/1250000000_red_swiper.png',
    '/images/1250000000_swiper.png',
];
const imgSrc = ['/images/randing_how.png', '/images/randing_contact.png'];

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center w-2/3 p-10">
            <ImageSlider images={imgSliderSrc} />
            <div className="w-full my-5">
                <YoutubeVideo videoId="r-rrUGDvLZo" />
            </div>
            <AdditionalImages images={imgSrc} />
        </div>
    );
};

export default Home;
