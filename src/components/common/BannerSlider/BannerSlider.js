import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './BannerSlider.css'; // Create this file for custom styling

const BannerSlider = () => {
    const images = [
        '../../../images/banner1.jpg',
        '../../../images/banner2.jpg',
        // Add more image URLs here
    ];

    return (
        <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            dynamicHeight={false}
            interval={3000} // Change this to your desired interval
        >
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Banner ${index + 1}`} />
                </div>
            ))}
        </Carousel>
    );
};

export default BannerSlider;
