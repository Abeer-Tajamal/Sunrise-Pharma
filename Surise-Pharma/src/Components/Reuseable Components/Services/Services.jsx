import MediaTop from "../Cards/MediaTop/MediaTop";
import "./Services.css";

const Services = () => {
  return (
    <div className="main-container">
      <div className="inner-container">
        <MediaTop
          imgSrc="../Assets/Services/Diabetes Care.jpg"
          imgLink="/diabetes-specialized-care-center"
          btnName="Diabetes Specialized Care"
          content="We can help you understand and manage your diabetes with specialized monitoring, medications, and recommendations."
        />
        <MediaTop
          imgSrc="../Assets/Services/Med Pre-Pours.jpg"
          imgLink="/med-pre-pours"
          btnName="Med Pre-Pours"
          content="We offer med pre-poured packaging that bundles your medications together by date and time."
        />
        <MediaTop
          imgSrc="../Assets/Services/Medical Equipment.jpg"
          imgLink="/durable-medical-equipment"
          btnName="Medical Equipment"
          content="We carry a wide selection of medical equipment, including ambulatory aids, nebulizers and bathroom equipment."
        />
        <MediaTop
          imgSrc="../Assets/Services/Health Screening.jpg"
          imgLink="/health-screenings"
          btnName="Health Screening"
          content="We offer onsite health screenings that allow you to get more information on your health without having to make a trip to the doctor."
        />
      </div>
      <div className="inner-container">
        <MediaTop
          imgSrc="../Assets/Services/Immunixations.jpg"
          imgLink="/immunizations"
          btnName="Immunization"
          content="We offer a variety of vaccines to keep you healthy. Contact us to learn more about our immunizations."
        />
        <MediaTop
          imgSrc="../Assets/Services/Leader Products.jpg"
          imgLink="/leader-products"
          btnName="Leader Products"
          content="We proudly offer LEADER™ high-quality products which contain the same active ingredients as national brands, at a lower cost."
        />
        <MediaTop
          imgSrc="../Assets/Services/Medication Adherence.jpg"
          imgLink="/medication-adherence"
          btnName="Medication Adherence"
          content="Avoid medication non-adherence and let our pharmacists help you better manage your medications."
        />
        <MediaTop
          imgSrc="../Assets/Services/Medication Synchronization.jpg"
          imgLink="/medication-synchronization"
          btnName="Medication Synchronization"
          content="Sync your prescriptions with our pharmacy and pick up all of your medications on the same day each month."
        />
      </div>
      <div className="inner-container">
        <MediaTop
          imgSrc="../Assets/Services/Medication Management.jpg"
          imgLink="/medication-therapy-management"
          btnName="Medication Management"
          content="Let our pharmacy team better help you manage you and your family's medications and health conditions."
        />
        <MediaTop
          imgSrc="../Assets/Services/Nutrient Depletion Counseling.jpg"
          imgLink="/nutrient-depletion-counseling"
          btnName="Nutrient Depletion Counseling"
          content="Our staff is trained in identifying drug-induced nutrient depletion and providing medication counseling to help."
        />
        <MediaTop
          imgSrc="../Assets/Services/Home Delivery.png"
          imgLink="/home-delivery"
          btnName="Home Delivery"
          content="We offer free delivery to the nearby Orange area. Contact us for details or to schedule your free delivery."
        />
      </div>
    </div>
  );
};

export default Services;
/* <MediaTop
    imgSrc="../Assets/Home Page/Covid-19 Testing.jpg"
    imgLink="/covid-19-testing"
    btnName="COVID-19 Testing"
    content="In an effort to reduce the spread of COVID-19, we offer our community testing that can detect all variants. Contact us today to get tested."
  /> 
 <MediaTop
  imgSrc="../Assets/Services/Erectile Dysfuntion.jpg"
  imgLink="/erectile-dysfunction"
  btnName="Erectile Dysfunction"
  content="You can feel comfortable discussing your ED questions and concerns with our pharmacist"
/> */
