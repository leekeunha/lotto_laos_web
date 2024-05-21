// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function ImageSlider({ images }) {
    return (
        <div className="w-full h-70">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={src}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
