import MediaLeft from "../../Cards/MediaLeft/MediaLeft";
import "../Services.css"

const AdditionalService = () => {
  return (
    <div className="additional-service-container">
      <MediaLeft
        imgSrc="./Assets/Services/Additional Services/medication service.png"
        title="Medication Services"
        content="Securely transfer and refill prescriptions online 24/7."
      />
      <MediaLeft
        imgSrc="./Assets/Services/Additional Services/patient resources.png"
        title="Patient Resources"
        content="Healthcare and Treatment Information."
      />
    </div>
  );
};

export default AdditionalService;