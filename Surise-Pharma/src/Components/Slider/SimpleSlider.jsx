// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./SimpleSlider.css";
// import Slider from "react-slick";

// export default function SimpleSlider() {
//   var settings = {
//     infinite: true,
//     adaptiveHeight: true,
//     // autoplay: true,
//     // autoplaySpeed: 4000,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <Slider className="my-custom-slider" {...settings}>
//       <div
//         style={{
//           backgroundImage:
//             "url(./Asserts/Home Page/Welocme to Sunrise Phasrmacy.jpg) !important",
//           backgroundSize: "100% 100%",
//         }}
//       >
//         <h1>Welcome to Sunrise Pharmacy</h1>
//         <p>Let us come to you</p>
//       </div>
//       <div>
//         <h3>COVID-19 Testing</h3>
//       </div>
//       <div>
//         <h3>Diabetes Care</h3>
//       </div>
//       <div>
//         <h3>Med Pre-Pours</h3>
//       </div>
//       <div>
//         <h3>Durable Medical Equipment</h3>
//       </div>
//       <div>
//         <h3>Erectile Dysfunction</h3>
//       </div>
//       <div>
//         <h3>Health Screenings</h3>
//       </div>
//       <div>
//         <h3>Immunizations</h3>
//       </div>
//       <div>
//         <h3>Leader Products</h3>
//       </div>
//       <div>
//         <h3>Erectile Dysfunction</h3>
//       </div>
//       <div>
//         <h3>Erectile Dysfunction</h3>
//       </div>
//       <div>
//         <h3>Erectile Dysfunction</h3>
//       </div>
//     </Slider>
//   );
// }

import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import "./SimpleSlider.css"

const MyCarousel = () => {
  const slideStyles = [
    { backgroundImage: 'url("./Assets/Home Page/Become an insider.jpg")', link:"https://www.google.com/" },
    { backgroundImage: 'url("https://placekitten.com/801/300")' },
    { backgroundImage: 'url("https://placekitten.com/802/300")' },
  ];

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={30}
      totalSlides={3}
      isPlaying
      interval={2000}
    >
      <Slider>
        {slideStyles.map((style, index) => (
          <Slide key={index} index={index} style={style}>
            <div className="overlay">
              {/* You can add content inside the Slide if needed */}
              {/* <div>Your content here</div> */}
              </div>
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
};

export default MyCarousel;