import MediaTop from "../Cards/MediaTop/MediaTop";
import "./Services.css";

const Services = () => {
  return (
    <div className="main-container">
      <div className="inner-container-services">
        <MediaTop
          imgSrc="../Assets/Services/Diabetes Care.jpg"
          imgLink="/diabetes-specialized-care-center"
          btnName="Diabetes Specialized Care"
          content="We can assist you in comprehending and handling your diabetes through specialized monitoring, medications, and recommendations."
        />
        <MediaTop
          imgSrc="../Assets/Services/Med Pre-Pours.jpg"
          imgLink="/med-pre-pours"
          btnName="Med Pre-Pours"
          content="We provide med pre-poured medication packaging that organizes your medications based on both date and time."
        />
        <MediaTop
          imgSrc="../Assets/Home Page/Durable Medical Equipment.jpeg"
          imgLink="/durable-medical-equipment"
          btnName="Medical Equipment"
          content="We stock an extensive range of medical equipment, encompassing ambulatory aids, nebulizers, and bathroom essentials."
        />
        <MediaTop
          imgSrc="../Assets/Services/Health Screening.jpg"
          imgLink="/health-screenings"
          btnName="Health Screening"
          content="We provide on-site health screenings, giving you the opportunity to gather health information without the need for a visit to the doctor."
        />
      </div>
      <div className="inner-container-services">
        <MediaTop
          imgSrc="../Assets/Services/Immunixations.jpg"
          imgLink="/immunizations"
          btnName="Immunization"
          content="Explore our range of vaccines designed to support your well-being. Reach out to us for further details on our immunization options."
        />
        <MediaTop
          imgSrc="../Assets/Services/Leader Products.jpg"
          imgLink="/leader-products"
          btnName="Leader Products"
          content="We take pride in providing LEADER™ high-quality products that feature identical active ingredients as national brands but come at a more affordable price."
        />
        <MediaTop
          imgSrc="../Assets/Services/Medication Adherence.jpg"
          imgLink="/medication-adherence"
          btnName="Medication Adherence"
          content="Prevent medication non-adherence by allowing our pharmacists to assist you in enhancing your medication management."
        />
        <MediaTop
          imgSrc="../Assets/Services/Medication Synchronization.jpg"
          imgLink="/medication-synchronization"
          btnName="Medication Synchronization"
          content="Synchronize your prescriptions with our pharmacy and collect all your medications on a consistent day each month."
        />
      </div>
      <div className="inner-container-services">
        <MediaTop
          imgSrc="../Assets/Services/Medication Management.jpg"
          imgLink="/medication-therapy-management"
          btnName="Medication Management"
          content="Allow our pharmacy team to assist you in effectively managing the medications and health conditions of you and your family."
        />
        <MediaTop
          imgSrc="../Assets/Services/Nutrient Depletion Counseling.jpg"
          imgLink="/nutrient-depletion-counseling"
          btnName="Nutrient Depletion Counseling"
          content="Our team is skilled in recognizing nutrient depletion caused by medications and offers counseling to provide assistance."
        />
        <MediaTop
          imgSrc="../Assets/Services/Home Delivery.png"
          imgLink="/home-delivery"
          btnName="Home Delivery"
          content="Enjoy complimentary delivery within the nearby Orange area. Reach out to us for more information or to arrange your free delivery."
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
