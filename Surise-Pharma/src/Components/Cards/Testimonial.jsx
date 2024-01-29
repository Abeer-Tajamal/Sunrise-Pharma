import React from 'react';
import TestimonialCard from "../Reuseable Components/Cards/MediaCards";

const Testimonials = () => {

    const TestimonialCard1 = {
        image: '../../../public/Assets/Home Page/Testimonial.png',
        title: "Michael C.",
        description: "This is the place for your prescription needs, etc!. After dealing with the 'big boys' in town and getting the run around for several years on various occasions, I'm done with them. Go to Sunrise. Nice people, great old time service. You won't regret it."
    };

    const TestimonialCard2 = {
        image: '../../../public/Assets/Home Page/Testimonial.png',
        title: "Ciara Y.",
        description: "I have been using Sunrise Pharmacy for my mother-in-law after having had a negative experience with West Haven Pharmacy. They have been extremely helpful and on top of things with her medications. They also do medication delivery service which is extremely helpful seeing as my mother-in-law is disabled and unable to drive. "
    };

    const TestimonialCard3 = {
        image: '../../../public/Assets/Home Page/Testimonial.png',
        title: "Emily D.",
        description: "My grandma goes to Sunrise Pharmacy and she loves it. She says she has saved hundreds of dollars on her prescriptions since she started going there. The pharmacist is so kind and really takes time to get to know his clients."
    };

    return (
        <>
            <TestimonialCard {...TestimonialCard1} />
            <TestimonialCard {...TestimonialCard2} />
            <TestimonialCard {...TestimonialCard3} />
        </>
    )
}
export default Testimonials