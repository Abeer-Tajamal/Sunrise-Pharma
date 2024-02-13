import React, { useState } from "react";
import "./Form.css";
import InputIcon from "@mui/icons-material/Input";

function Step1({ onNext }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateofbirth, setDateOfBirth] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any validation before moving to the next step
    onNext({ firstName, lastName, email, phone, dateofbirth });
  };

  const formatMobileNumber = (input) => {
    // Remove any non-numeric characters
    const formattedNumber = input.replace(/\D/g, "");

    // Add hyphens at appropriate positions
    if (formattedNumber.length > 7) {
      return `(${formattedNumber.slice(0, 3)}) ${formattedNumber.slice(
        3,
        6
      )} - ${formattedNumber.slice(6, 10)}`;
    }

    return formattedNumber;
  };

  return (
    <form onSubmit={handleSubmit} className="form-outer-div">
      <div className="title-div">
        <InputIcon className="title-icon" />
        <h2>Enter Profile Info</h2>
      </div>
      <div className="two-inputs">
        <div className="label-input">
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="label-input">
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="two-inputs">
        <div className="label-input">
          <label>Cell Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(formatMobileNumber(e.target.value))}
            required
          />
        </div>
        <div className="label-input">
          <label>Date of Birth</label>
          <input
            type="date"
            value={dateofbirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="last-input">
        <label>Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="btn-div">
        <button type="submit" className="next-btn">
          NEXT
        </button>
      </div>
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
    <form onSubmit={handleSubmit} className="form-outer-div">
      <div className="title-div">
        <InputIcon className="title-icon" />
        <h2>Select Your Pharmacy</h2>
      </div>
      <div className="label-input">
        <label>Delivery Type:</label>
        <input
          type="text"
          value={deliverType}
          onChange={(e) => setDeliverType(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit" className="next-btn">
          Next
        </button>
      </div>
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
        <button onClick={handleReset} className="back-btn">
          back
        </button>
      )}
    </div>
  );
}

export default Stepper;
