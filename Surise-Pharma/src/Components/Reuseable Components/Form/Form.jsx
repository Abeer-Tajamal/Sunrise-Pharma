import React, { useState } from "react";

function Step1({ onNext }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateofbirth, setDateOfBirth] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any validation before moving to the next step
    onNext({ firstName, lastName, email, phone, dateofbirth });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Step 1: Personal Information</h2>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>
      <label>
        Date of Birth:
        <input
          type="date"
          value={dateofbirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <button type="submit">Next</button>
    </form>
  );
}

function Step2({ onNext }) {
  const [deliverType, setDeliverType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ deliverType });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Step 2: Delivery Type</h2>
      <label>
        Delivery Type:
        <input
          type="text"
          value={deliverType}
          onChange={(e) => setDeliverType(e.target.value)}
          required
        />
      </label>
      <button type="submit">Next</button>
    </form>
  );
}

function Step3({ onNext }) {
  const [medicineNumber, setMedicineNumber] = useState("");
  const [medicineName, setMedicineName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ medicineNumber, medicineName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Step 3: Medicine Information</h2>
      <label>
        Medicine Number:
        <input
          type="text"
          value={medicineNumber}
          onChange={(e) => setMedicineNumber(e.target.value)}
          required
        />
      </label>
      <label>
        Medicine Name:
        <input
          type="text"
          value={medicineName}
          onChange={(e) => setMedicineName(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

function Stepper() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep((prevStep) => prevStep + 1);
  };

  const handleReset = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      {step === 1 && <Step1 onNext={handleNext} />}
      {step === 2 && <Step2 onNext={handleNext} />}
      {step === 3 && (
        <Step3
          onNext={(data) => console.log("Submitted:", { ...formData, ...data })}
        />
      )}
      {step < 3 && (
        <button onClick={handleReset} style={{ marginTop: "1rem" }}>
          Back
        </button>
      )}
    </div>
  );
}

export default Stepper;
