import React from 'react';
import ImageSlider from '../ui/ImageSwiper';
import YoutubeVideo from '../ui/YoutubeVideo';
import AdditionalImages from '../ui/AdditionalImages';

const imgSliderSrc = [
    '/happy545_swiper.png',
    '/1250000000_red_swiper.png',
    '/1250000000_swiper.png',
];
const imgSrc = ['/randing_how.png', '/randing_contact.png'];

const Home = () => {
    return (
        <main className="flex flex-col items-center justify-center w-2/3">
            <ImageSlider images={imgSliderSrc} />
            <div className="w-full my-5">
                <YoutubeVideo videoId="r-rrUGDvLZo" />
            </div>
            <AdditionalImages images={imgSrc} />
        </main>
    );
};

export default Home;
