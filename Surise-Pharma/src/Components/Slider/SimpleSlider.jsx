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

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";

const Slider = () => {
  const slides = [
    {
      // image: "./Asserts/Home Page/Welocme to Sunrise Phasrmacy.jpg",
      text: "Slide 1 text",
    },
    {
      image: "image_url_2",
      text: "Slide 2 text",
    },
    {
      image: "image_url_3",
      text: "Slide 3 text",
    },
    {
      image: "image_url_4",
      text: "Slide 4 text",
    },
    {
      image: "image_url_5",
      text: "Slide 5 text",
    },
  ];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              height: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            {slide.text}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
