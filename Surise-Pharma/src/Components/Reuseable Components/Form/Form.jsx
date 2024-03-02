import React, { useState } from "react";
import InputIcon from "@mui/icons-material/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import "./Form.css";

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
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ deliverType, address });
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
        <select
          className="menu-option"
          value={deliverType}
          onChange={(e) => setDeliverType(e.target.value)}
          required
        >
          <option value="">--Please select--</option>
          <option value="PickUp">Pick Up</option>
          <option value="Delivery">Delivery</option>
        </select>
      </div>
      {deliverType === "Delivery" && (
        <div className="last-input">
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
      )}
      <div className="btn-div">
        <button type="submit" className="next-btn">
          Next
        </button>
      </div>
    </form>
  );
}

function Step3({ onNext }) {
  const [medicines, setMedicines] = useState([]);
  const [open, setOpen] = useState(false);
  const [medicineNumber, setMedicineNumber] = useState("");
  const [medicineName, setMedicineName] = useState("");

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedMedicines = [...medicines];
    updatedMedicines[index][name] = value;
    setMedicines(updatedMedicines);
  };

  const handleAddMedicine = () => {
    setOpen(true);
  };

  const handleModalSubmit = () => {
    if (medicineNumber > 99999 || medicineNumber < 40000)
      alert("Rx Number must be between 39999 and 99999");
    else {
      setMedicines([
        ...medicines,
        { number: medicineNumber, name: medicineName },
      ]);
      setMedicineNumber("");
      setMedicineName("");
      setOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ medicines });
  };

  return (
    <form className="form-outer-div" onSubmit={handleSubmit}>
      <div className="title-div">
        <InputIcon className="title-icon" />
        <h2>Medications List</h2>
      </div>
      {medicines.map((medicine, index) => (
        <div key={index} style={{ width: "100%" }}>
          <div className="display-medicine">
            <label>Rx Number:</label>&nbsp;
            <input
              type="text"
              value={medicine.number}
              onChange={(e) => handleChange(index, e)}
            />
            &nbsp;
            <label>Rx Name:</label>&nbsp;
            <input
              type="text"
              value={medicine.name}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
        </div>
      ))}
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <button
            className="next-btn"
            type="button"
            onClick={handleAddMedicine}
          >
            Add Medicine
          </button>
        </div>
        &nbsp;
        <div>
          <button className="next-btn" type="submit">
            Submit
          </button>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="modal-content">
          <h2>Add Medicine</h2>
          <label>
            RX Number:&nbsp;
            <input
              type="number"
              value={medicineNumber}
              onChange={(event) => setMedicineNumber(event.target.value)}
              required
              min="40000"
              max="99999"
            />
            &nbsp;
          </label>
          <label>
            RX Name: &nbsp;
            <input
              type="text"
              value={medicineName}
              onChange={(event) => setMedicineName(event.target.value)}
            />
          </label>
          &nbsp;
          <button className="next-btn" onClick={handleModalSubmit}>
            Add
          </button>
        </div>
      </Modal>
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
    console.log({ ...formData, ...data });
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
