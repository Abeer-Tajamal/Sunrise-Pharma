import MediaLeft from "../../Cards/MediaLeft/MediaLeft";

const AdditionalService = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <MediaLeft
        imgSrc="./Assets/Services/Additional Services/medication service.png"
        title="Medication Services"
        content="24/7 Online Prescription Refills Secure Transfers"
      />
      <MediaLeft
        imgSrc="./Assets/Services/Additional Services/patient resources.png"
        title="Patient Resources"
        content="Treatment & Health Information"
      />
    </div>
  );
};

export default AdditionalService;
