import React, { useState } from "react";
import InputIcon from "@mui/icons-material/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Swal from "sweetalert2";
import "./Form.css";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

function Step1({ onNext }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateofbirth, setDateOfBirth] = useState("");

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any validation before moving to the next step
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phone === "" ||
      dateofbirth === ""
    ) {
      Swal.fire({
        title: "Warning",
        text: "All fields with * are required",
        icon: "warning",
      });
    } else {
      onNext({ firstName, lastName, email, phone, dateofbirth });
    }
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
    <form className="form-outer-div">
      <div className="title-div">
        <InputIcon className="title-icon" />
        <h2>Enter Profile Info</h2>
      </div>
      <div className="two-inputs">
        <div className="label-input">
          <TextField
            required
            variant="outlined"
            label="First Name"
            value={firstName}
            fullWidth
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="label-input">
          <TextField
            required
            variant="outlined"
            label="Last Name"
            value={lastName}
            fullWidth
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="two-inputs">
        <div className="label-input">
          <TextField
            required
            type="tel"
            variant="outlined"
            label="Cell Phone"
            value={phone}
            fullWidth
            onChange={(e) => {
              setPhone(formatMobileNumber(e.target.value));
            }}
          />
        </div>
        <div className="label-input">
          <TextField
            required
            type="email"
            variant="outlined"
            label="Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="last-input">
        <InputLabel htmlFor="date">Date of Birth *</InputLabel>
        <TextField
          required
          fullWidth
          type="date"
          variant="outlined"
          id="date"
          value={dateofbirth}
          onChange={(e) => {
            setDateOfBirth(e.target.value);
          }}
        />
      </div>
      <div className="btn-div">
        <Button
          variant="contained"
          color="inherit"
          onClick={() => history("/")}
        >
          Back
        </Button>
        &nbsp;
        <Button variant="contained" color="success" onClick={handleSubmit}>
          NEXT
        </Button>
      </div>
    </form>
  );
}

function Step2({ onNext, onPrevious }) {
  const [deliverType, setDeliverType] = useState("");
  const [address, setAddress] = useState("");

  const handleBack = (e) => {
    onPrevious();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (deliverType === "PickUp") {
      onNext({ deliverType, address });
    } else if (deliverType === "" || address === "") {
      Swal.fire({
        title: "Warning",
        text: "All fields with * are required",
        icon: "warning",
      });
    } else {
      onNext({ deliverType, address });
    }
  };

  return (
    <form className="form-outer-div">
      <div className="title-div">
        <InputIcon className="title-icon" />
        <h2>Select Your Pharmacy</h2>
      </div>
      <div className="label-input">
        <FormControl sx={{ minWidth: 615 }}>
          <InputLabel className="form-label">Pharmacy Location </InputLabel>
          <Select className="menu-option" label="Pharmacy Location">
            <MenuItem value="SunrisePharmacy">Sunrise Pharmacy</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="label-input">
        <FormControl sx={{ minWidth: 615 }}>
          <InputLabel className="form-label">Pickup Method *</InputLabel>
          <Select
            label="Pickup Method"
            className="menu-option"
            value={deliverType}
            onChange={(e) => setDeliverType(e.target.value)}
            required
          >
            <MenuItem value="">--Please select--</MenuItem>
            <MenuItem value="PickUp">Pick Up</MenuItem>
            <MenuItem value="Delivery">Delivery</MenuItem>
          </Select>
        </FormControl>
      </div>
      {deliverType === "Delivery" && (
        <div className="last-input">
          <TextField
            required
            label="Address"
            fullWidth
            variant="outlined"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
      )}
      <div className="btn-div">
        <Button variant="contained" color="inherit" onClick={handleBack}>
          Back
        </Button>
        &nbsp;
        <Button variant="contained" color="success" onClick={handleSubmit}>
          Next
        </Button>
      </div>
    </form>
  );
}

function Step3({ onNext }) {
  const [medicines, setMedicines] = useState([]);
  const [open, setOpen] = useState(false);
  const [medicineNumber, setMedicineNumber] = useState("");
  const [medicineName, setMedicineName] = useState("");
  const [patientNotes, setPatientNotes] = useState("");

  const handleModalSubmit = () => {
    if (medicineNumber > 999999 || medicineNumber < 40000)
      Swal.fire({
        title: "Warning",
        text: "Rx Number must be between 39999 and 999999",
        icon: "warning",
      });
    else {
      setMedicines([
        ...medicines,
        { number: medicineNumber, name: medicineName, notes: patientNotes },
      ]);
      setMedicineNumber("");
      setMedicineName("");
      setPatientNotes("");
      setOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ medicines });
  };

  return (
    <form className="form-outer-div">
      <div className="title-div">
        <InputIcon className="title-icon" />
        <h2>Medications List</h2>
      </div>
      {medicines.map((medicine, index) => (
        <div key={index} style={{ width: "100%" }}>
          <div className="two-inputs">
            <div className="label-input">
              <TextField
                type="number"
                label="Rx Number"
                variant="outlined"
                value={medicine.number}
              />
            </div>
            <div className="label-input">
              <TextField
                label="Rx Name"
                variant="outlined"
                value={medicine.name}
              />
            </div>
            <div className="label-input">
              <TextField
                label="Patient Notes"
                variant="outlined"
                value={medicine.notes}
              />
            </div>
          </div>
        </div>
      ))}
      <br />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Add Medicine
          </Button>
        </div>
        &nbsp;
        <div>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="modal-content">
          <h2>Add Medicine</h2>
          <div className="two-inputs">
            <div className="label-input">
              <TextField
                required
                fullWidth
                type="number"
                label="RX Number"
                variant="outlined"
                value={medicineNumber}
                onChange={(e) => {
                  setMedicineNumber(e.target.value);
                }}
              />
            </div>
            <div className="label-input">
              <TextField
                label="RX Name"
                fullWidth
                variant="outlined"
                value={medicineName}
                onChange={(e) => {
                  setMedicineName(e.target.value);
                }}
              />
            </div>
            <div className="label-input">
              <TextField
                label="Patient Notes (Optional)"
                fullWidth
                variant="outlined"
                id="date"
                value={patientNotes}
                onChange={(e) => {
                  setPatientNotes(e.target.value);
                }}
              />
            </div>
          </div>

          <Button variant="contained" onClick={handleModalSubmit}>
            Add
          </Button>
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
      .post("http://localhost:5000/send-refill-data", { ...formData, ...data })
      .then((res) => {
        if (res.data.success) {
          Swal.fire({
            title: "Data Send Successfully",
            text: "Thank You!",
            icon: "success",
          });
          history("/");
        } else {
          Swal.fire({
            title: "Error",
            text: "Error occured while sending email",
            icon: "error",
          });
        }
      })
      .catch((error) => {
        console.error("Error sending mail:", error);
        Swal.fire({
          title: "Error",
          text: "Error occured while sending email",
          icon: "error",
        });
      });
  };

  return (
    <div>
      {step === 1 && <Step1 onNext={handleNext} />}
      {step === 2 && <Step2 onNext={handleNext} onPrevious={handleReset} />}
      {step === 3 && <Step3 onNext={(data) => sendMail(data)} />}
    </div>
  );
}

export default Stepper;
