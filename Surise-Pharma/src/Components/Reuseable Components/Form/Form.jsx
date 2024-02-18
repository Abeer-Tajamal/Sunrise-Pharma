import React, { useState } from "react";
import "./Form.css";
import InputIcon from "@mui/icons-material/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
            name={dateofbirth}
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
        <label className="form-label">Pharmacy Location</label>
        <select className="menu-option">
          <option>Sunrise Pharmacy</option>
        </select>
      </div>
      <div className="label-input">
        <label className="form-label">Pickup Method</label>
        <input
          className="menu-option"
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
  const [RxNumber, setRxNumber] = useState("");
  const [RxName, setRxName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ RxNumber, RxName });
  };

  return (
    <form className="form-outer-div" onSubmit={handleSubmit}>
      <div className="title-div">
        <InputIcon className="title-icon" />
        <h2>Medications List</h2>
      </div>
      <div className="last-input">
        <label>Rx Number:</label>
        <input
          type="text"
          value={RxNumber}
          onChange={(e) => setRxNumber(e.target.value)}
          required
        />
      </div>
      <div className="last-input">
        <label>Rx Name:</label>
        <input
          type="text"
          value={RxName}
          onChange={(e) => setRxName(e.target.value)}
          required
        />
      </div>
      <button className="next-btn" type="submit">
        Submit
      </button>
    </form>
  );
}

function Stepper() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const history = useNavigate();

  const handleNext = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep((prevStep) => prevStep + 1);
  };

  const handleReset = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const sendMail = (data) => {
    axios
      .post("http://localhost:5000/send-data", { ...formData, ...data })
      .then((res) => {
        if (res.data.success) {
          history("/");
        } else alert("Error occured");
      })
      .catch((error) => {
        console.error("Error sending mail:", error);
        alert("Error occurred");
      });
  };

  return (
    <div>
      {step === 1 && <Step1 onNext={handleNext} />}
      {step === 2 && <Step2 onNext={handleNext} />}
      {step === 3 && <Step3 onNext={(data) => sendMail(data)} />}
      {step < 3 && (
        <button onClick={handleReset} className="back-btn">
          back
        </button>
      )}
    </div>
  );
}

export default Stepper;
