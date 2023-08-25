import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TileCard.css'; // You can style your carousel here
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';

const TileCard = ({ tileCardData }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200000,
    nextArrow: <ArrowCircleRightOutlinedIcon />,
    prevArrow: <ArrowCircleLeftOutlinedIcon />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="text-icon-carousel">
      <Slider {...settings}>
        {tileCardData.map((item, index) => (
          <div key={index} className="carousel-item">
            <div className="carousel-icon">
              {item.icon === 'man' && <ManIcon />}
              {item.icon === 'woman' && <WomanIcon />}
              {item.icon === 'sports' && <SportsBaseballIcon />}
              {item.icon === 'baby' && <BabyChangingStationIcon />}
            </div>
            <div className='carousel-text'>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            </div>
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TileCard;
