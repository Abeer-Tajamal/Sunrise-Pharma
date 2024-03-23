import "./Testimonial.css";
import TestimonialCard from "../../Reuseable Components/Client Reviews/Review";

const Testimonials = () => {
  const reviewData = {
    avatarSrc: "Assets/Home Page/testimonial-1.png",
    Title: "Sandy Thomson",
    ratingValue: 5,
    content:
      "Look no further for your prescription needs, and more! After navigating the challenges with the prominent establishments in town and enduring the runaround on numerous occasions over several years, I've decided to switch to Sunrise. The staff is pleasant, and the service is reminiscent of the good old days. Give it a try; you won't be disappointed.",
  };

  const reviewData2 = {
    avatarSrc: "Assets/Home Page/testimonial-2.png",
    Title: "Alex Williamson",
    ratingValue: 5,
    content:
      "I've chosen Sunrise Pharmacy for my mother-in-law's needs following a disappointing experience with West Haven Pharmacy. The team at Sunrise has been remarkably supportive and proactive in managing her medications. Their medication delivery service has proven especially beneficial since my mother-in-law is disabled and unable to drive.",
  };

  const reviewData3 = {
    avatarSrc: "Assets/Home Page/testimonial-3.png",
    Title: "John Brokelyn",
    ratingValue: 5,
    content:
      "My grandmother is a patron of Sunrise Pharmacy, and she's delighted with her experience. According to her, she has saved a substantial amount on her prescriptions since she began using their services. The pharmacist is exceptionally kind and takes the time to build a personal connection with his clients.",
  };

  return (
    <div className="containerDivTestimonial">
      <TestimonialCard {...reviewData} />
      <TestimonialCard {...reviewData2} />
      <TestimonialCard {...reviewData3} />
    </div>
  );
};
export default Testimonials;
