import MediaLeft from "../../Cards/MediaLeft/MediaLeft";

const AdditionalService = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
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
