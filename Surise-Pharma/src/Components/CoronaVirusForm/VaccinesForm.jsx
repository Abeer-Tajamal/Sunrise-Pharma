import { useState } from "react";
import Swal from "sweetalert2";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import "./VaccinesForm.css";
import axios from "axios";

const Vaccines = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [vaccineType, setVaccineType] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [serviceType, setServiceType] = useState("");

  // Function to handle date change
  const handleDateChange = (e) => {
    const selected = new Date(e.target.value);
    if (selected.getDay() !== 0) {
      setSelectedDate(e.target.value);
    } else {
      Swal.fire({
        title: "Info",
        text: "Pharmacy is close on Sunday",
        icon: "info",
      });
      setSelectedDate("");
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

  const handleClick = (e) => {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !serviceType ||
      !vaccineType
    ) {
      Swal.fire({
        title: "Warning",
        text: "All fields with * are compulsary to fill",
        icon: "warning",
      });
    } else {
      axios
        .post("http://localhost:5000/send-vaccine-data", {
          firstName,
          lastName,
          email,
          phone,
          selectedDate,
          serviceType,
          vaccineType,
        })
        .then((res) => {
          if (res.data.success) {
            Swal.fire({
              title: "Success",
              text: "Thank you!",
              icon: "success",
            });
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setSelectedDate("");
            setServiceType("");
            setVaccineType("");
          } else {
            Swal.fire({
              title: "Error",
              text: "Error occured while sending email",
              icon: "error",
            });
          }
        })
        .catch((error) => {
          console.error("Error Sending Email: ", error);
          Swal.fire({
            title: "Error",
            text: "Error occured while sending email",
            icon: "error",
          });
        });
    }
  };

  return (
    <div className="bordered-div-vaccine">
      <div>
        <Typography variant="h5" gutterBottom>
          Join our Vaccination
        </Typography>
        <div className="patient-div-vaccine">
          <PersonIcon color="action" />
          &nbsp;
          <Typography gutterBottom variant="h6">
            Patient Details
          </Typography>
        </div>
      </div>
      <br />
      <div className="vaccine-form-inputs">
        <div className="form-div-vaccine">
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
        &nbsp;&nbsp;&nbsp;
        <div className="form-div-vaccine">
          <TextField
            required
            value={lastName}
            variant="outlined"
            label="Last Name"
            fullWidth
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="vaccine-form-inputs">
        <div className="form-div-vaccine">
          <TextField
            required
            value={email}
            variant="outlined"
            label="Email"
            type="email"
            fullWidth
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        &nbsp;&nbsp;&nbsp;
        <div className="form-div-vaccine">
          <TextField
            required
            variant="outlined"
            label="Phone"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(formatMobileNumber(e.target.value))}
          />
        </div>
      </div>
      <div>
        <div className="form-div-vaccine">
          <FormControl sx={{ minWidth: 615 }}>
            <InputLabel id="vaccine-input">Offer Vaccine *</InputLabel>
            <Select
              required
              label="Offer Vaccine"
              value={vaccineType}
              onChange={(e) => setVaccineType(e.target.value)}
            >
              <MenuItem value="Flu">Flu (Influenza)</MenuItem>
              <MenuItem value="Shingles">Shingles</MenuItem>
              <MenuItem value="Pneumonia">Pneumonia</MenuItem>
              <MenuItem value="HPV">HPV (human papilloma virus)</MenuItem>
              <MenuItem value="Hepatitis">Hepatitis</MenuItem>
              <MenuItem value="TDAP">TDAP</MenuItem>
              <MenuItem value="MMR">MMR (Measles, mumps, rubella)</MenuItem>
              <MenuItem value="Meningitis">Meningitis</MenuItem>
              <MenuItem value="RSV">RSV</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="form-div-vaccine">
          <FormControl sx={{ minWidth: 615 }}>
            <InputLabel id="vaccine-service-type">
              Vaccine Service Type *
            </InputLabel>
            <Select
              required
              label="Vaccine Service Type"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
            >
              <MenuItem value="Walk-In">Walk In</MenuItem>
              <MenuItem value="Appointment">Book an Appointment</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      {serviceType === "Appointment" && (
        <div className="form-div-vaccine">
          <InputLabel htmlFor="date">Date of Appointment:</InputLabel>
          <TextField
            required
            fullWidth
            type="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
      )}

      <Button variant="contained" color="success" onClick={handleClick}>
        Submit
      </Button>
    </div>
  );
};

export default Vaccines;
