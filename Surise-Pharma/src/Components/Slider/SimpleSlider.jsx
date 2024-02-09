import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import "./SimpleSlider.css"

const MyCarousel = () => {
  const slideStyles = [
    {
      backgroundImage: 'url("./Assets/Home Page/Welocme to Sunrise Phasrmacy.jpg")',
      link: "/about-us",
      title: 'Welcome to Sunrise Pharmacy',
      description: 'Care Beyond Drugs'
    },
    {
      backgroundImage: 'url("./Assets/Home Page/Covid-19 Testing.jpg")',
      link: "/covid-19-testing",
      title: 'COVID-19 Testing',
      description: 'COVID-19 testing swabs'
    },
    {
      backgroundImage: 'url("./Assets/Home Page/Diabetes Care.jpeg")',
      link: "/diabetes-specialized-care-center",
      title: 'Diabetes Care',
      description: 'Let us help you understand and manage your diabetes'
    },
    {
      backgroundImage: 'url("./Assets/Home Page/Med Pre-Pours.jpg")',
      link: "/med-pre-pours",
      title: 'Med Pre-Pours',
      description: 'We offer a multi-dose packaging that bundles your medications together by date and time'
    },
    {
      backgroundImage: 'url("./Assets/Home Page/Durable Medical Equipment.jpeg")',
      link: "/durable-medical-equipment",
      title: 'Durable Medical Equipment',
      description: 'Available for purchase and rental'
    },
    {
      backgroundImage: 'url("./Assets/Home Page/Erectile Dysfunction.jpg")',
      link: "/erectile-dysfunction",
      title: 'Erectile Dysfunction',
      description: 'You can feel comfortable discussing your ED questions and concerns with our pharmacist'
    },
    {
      backgroundImage: 'url("./Assets/Home Page/Health Screening.jpeg")',
      link: "/health-screenings",
      title: 'Health Screenings',
      description: 'Pharmacist performing health screening on patient'
    },
    {
      backgroundImage: 'url("./Assets/Home Page/Immunization.jpeg")',
      link: "/immunizations",
      title: 'Immunizations',
      description: 'We offer a variety of vaccines to keep you healthy'
    },
    {
      backgroundImage: 'url("./Assets/Home Page/Leader Products.jpg")',
      link: "/leader-products",
      title: 'Leader Products',
      description: 'We proudly offer LEADER™ high-quality products which contain the same active ingredients as national brands, at a lower cost'
    },
    {
      backgroundImage: 'url("./Assets/Home Page/Medication Adherence.jpg")',
      link: "/medication-adherence",
      title: 'Medication Adherence',
      description: 'Avoid medication non-adherence and let our pharmacists help you better manage your medications'
    },
    {
      backgroundImage: 'url("./Assets/Home Page/Medication Synchronization.jpeg")',
      link: "/medication-synchronization",
      title: 'Medication Synchronization',
      description: 'Pick up all of your medications on the same day each month'
    },
    {
      backgroundImage: 'url("./Assets/Home Page/Medication Therapy Management.jpg")',
      link: "/medication-therapy-management",
      title: 'Medication Therapy Management',
      description: 'We can help you manage your medications and health conditions'
    },
    {
      backgroundImage: 'url("./Assets/Home Page/Nutrition Depletion Counseling.jpg")',
      link: "/nutrient-depletion-counseling",
      title: 'Nutrition Depletion Counseling',
      description: 'Our staff is trained in identifying drug-induced nutrient depletion and providing medication counseling to help'
    },
    {
      backgroundImage: 'url("./Assets/Home Page/Pet Care.jpeg")',
      link: "/",
      title: 'Pet Care',
      description: 'Prescriptions and medications specifically for your furry friend'
    },
    {
      backgroundImage: 'url("./Assets/Home Page/Free Delivery.jpeg")',
      link: "/home-delivery",
      title: 'Free Delivery',
      description: 'Let us come to you'
    }
  ];

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={40}
      totalSlides={15}
      isPlaying
      interval={4000}
    >
      <Slider>
        {slideStyles.map((style, index) => (
          <Slide className='background-image' key={index} index={index} style={style}>
            <a href={style.link}>
              <div className="overlay title">
                <h2>{style.title}</h2>
                <p>{style.description}</p>
              </div>
            </a>
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
};

export default MyCarousel;