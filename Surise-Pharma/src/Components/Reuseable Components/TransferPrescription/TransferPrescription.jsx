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
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./TransferPrescription.css";

const TransferPrescription = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateofBirth, setDateofBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [previouspharmacyLocation, setPreviousPharmacyLocation] = useState("");
  const [pharmacyName, setPharmacyName] = useState("");
  const [pharmacyNumber, setPharmacyNumber] = useState("");

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
      firstName === "" ||
      lastName === "" ||
      dateofBirth === "" ||
      phone === "" ||
      previouspharmacyLocation === ""
    ) {
      Swal.fire({
        title: "Warning",
        text: "All fields with * are compulsary to fill",
        icon: "warning",
      });
    } else {
      Swal.fire({
        title: "Success",
        text: "Thank you!",
        icon: "success",
      });
      setFirstName("");
      setLastName("");
      setDateofBirth("");
      setPhone("");
      setPreviousPharmacyLocation("");
    }
  };

  return (
    <div className="bordered-div-transfer">
      <div>
        <Typography variant="h5" gutterBottom>
          Transfer a Prescription
        </Typography>
        <div className="patient-div-transfer">
          <PersonIcon color="action" />
          &nbsp;
          <Typography gutterBottom variant="h6">
            Patient Details
          </Typography>
        </div>
      </div>
      <br />
      <div className="transfer-form-inputs">
        <div className="form-div-transfer">
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
        <div className="form-div-transfer">
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
      <div className="transfer-form-inputs">
        <div className="form-div-transfer">
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
      <div className="transfer-form-input">
        <InputLabel htmlFor="date">Date of Birth:</InputLabel>
        <TextField
          required
          type="date"
          value={dateofBirth}
          variant="outlined"
          fullWidth
          onChange={(e) => {
            setDateofBirth(e.target.value);
          }}
        />
      </div>
      <br />
      <div className="patient-div-transfer">
        <LocationOnIcon color="action" />
        &nbsp;
        <Typography gutterBottom variant="h6">
          Pharmacy Details
        </Typography>
      </div>
      <div className="patient-div-transfer">
        <FormControl sx={{ minWidth: 615 }}>
          <InputLabel id="pharmacyLocation">New Pharmacy Location</InputLabel>
          <Select label="New Pharmacy Location" disabled>
            <MenuItem value="Sunrise Pharmacy">Sunrise Pharmacy</MenuItem>
          </Select>
        </FormControl>
      </div>
      <br />
      <div className="patient-div-transfer">
        <TextField
          required
          variant="outlined"
          label="Previous Pharmacy Location"
          value={previouspharmacyLocation}
          fullWidth
          onChange={(e) => {
            setPreviousPharmacyLocation(e.target.value);
          }}
        />
      </div>
      <br />
      <div className="transfer-form-inputs">
        <div className="patient-div-transfer">
          <TextField
            required
            variant="outlined"
            label="Pharmacy Name"
            value={pharmacyName}
            fullWidth
            onChange={(e) => {
              setPharmacyName(e.target.value);
            }}
          />
        </div>
        &nbsp;&nbsp;&nbsp;
        <div className="patient-div-transfer">
          <TextField
            required
            variant="outlined"
            label="Pharmacy Number"
            value={pharmacyNumber}
            fullWidth
            onChange={(e) => {
              setPharmacyNumber(e.target.value);
            }}
          />
        </div>
      </div>
      <br />
      <br />
      <Button variant="contained" onClick={handleClick}>
        Submit
      </Button>
    </div>
  );
};

export default TransferPrescription;
