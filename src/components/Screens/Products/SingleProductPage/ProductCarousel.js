import React from 'react'
import { Carousel } from 'react-carousel-minimal';

export default function ProductCarousel() {
    const data = [
        {
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
         
        },
        {
          image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
          
        },
        {
          image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
          
        },
        
        {
          image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
         
        },
      ];
    
    
  return (
    <div className='single-product-carousel'>
        
            
        
    
      <Carousel
        data={data}
        time={20000}
        width="850px"
        height="400px"
        radius="10px"
        slideNumber={false}
        automatic={false}
        // dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="#fff"
        slideImageFit="cover"
        thumbnails={true}
        thumbnailWidth="100px"
        style={{
          maxWidth: "850px",
          maxHeight: "400px",
        }}
      />
  </div>
  )
}
