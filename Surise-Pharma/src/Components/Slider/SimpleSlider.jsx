import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { slideStyles } from "../Data";
import "./SimpleSlider.css";

const MyCarousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={40}
      totalSlides={12}
      isPlaying
      interval={5000}
    >
      <Slider>
        {slideStyles.map(
          ({ backgroundImage, link, title, description }, index) => (
            <Slide
              className="background-image"
              key={index}
              index={index}
              style={{ backgroundImage }}
            >
              <a href={link}>
                <div className="overlay-slider title-slider">
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
              </a>
            </Slide>
          )
        )}
      </Slider>
    </CarouselProvider>
  );
};

export default MyCarousel;
