import { useState } from "react";
import Swal from "sweetalert2";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MessageIcon from "@mui/icons-material/Message";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import "./TransferPrescription.css";
import axios from "axios";

const TransferPrescription = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateofBirth, setDateofBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [previouspharmacyLocation, setPreviousPharmacyLocation] = useState("");
  const [pharmacyName, setPharmacyName] = useState("");
  const [pharmacyNumber, setPharmacyNumber] = useState("");
  const [pharmacyNotes, setPharmacyNotes] = useState("");
  const [medicines, setMedicines] = useState([]);
  const [medicineNumber, setMedicineNumber] = useState("");
  const [medicineName, setMedicineName] = useState("");
  const [open, setOpen] = useState(false);
  const [ischecked, setIsChecked] = useState(true);

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
        { number: medicineNumber, name: medicineName },
      ]);
      setMedicineNumber("");
      setMedicineName("");
      setOpen(false);
    }
  };

  const handleClick = (e) => {
    if (
      !firstName ||
      !lastName ||
      !dateofBirth ||
      !phone ||
      !pharmacyName ||
      !pharmacyNumber ||
      !previouspharmacyLocation
    ) {
      Swal.fire({
        title: "Warning",
        text: "All fields with * are compulsary to fill",
        icon: "warning",
      });
    } else {
      axios
        .post("http://localhost:5000/send-transfer-data", {
          firstName,
          lastName,
          dateofBirth,
          phone,
          previouspharmacyLocation,
          pharmacyName,
          pharmacyNumber,
          pharmacyNotes,
          medicines,
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
            setDateofBirth("");
            setPhone("");
            setPreviousPharmacyLocation("");
            setPharmacyName("");
            setPharmacyNumber("");
            setPharmacyNotes("");
            setMedicines([]);
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
          <Select label="New Pharmacy Location">
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
              setPharmacyNumber(formatMobileNumber(e.target.value));
            }}
          />
        </div>
      </div>
      <br />
      <div className="patient-div-transfer">
        <LocalPharmacyIcon color="action" />
        &nbsp;
        <Typography gutterBottom variant="h6">
          Prescriptions
        </Typography>
      </div>
      <div>
        <Typography>
          Add the medication name and Rx number for all that you'd like to
          transfer
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              color="success"
              checked={ischecked}
              onChange={(e) => {
                setIsChecked(e.target.checked);
              }}
            />
          }
          label="Transfer all of my medications"
        />
        {!ischecked && (
          <div>
            {medicines.map((medicine, index) => (
              <div key={index} style={{ width: "100%" }}>
                <div className="two-inputs-transfer">
                  <div className="label-input-transfer">
                    <TextField
                      type="number"
                      label="Rx Number"
                      variant="outlined"
                      value={medicine.number}
                    />
                  </div>
                  <div className="label-input-transfer">
                    <TextField
                      label="Rx Name"
                      variant="outlined"
                      value={medicine.name}
                    />
                  </div>
                </div>
              </div>
            ))}
            <br />
            <div>
              <Button
                variant="outlined"
                color="success"
                onClick={() => setOpen(true)}
              >
                Add Medicine
              </Button>
            </div>
          </div>
        )}
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="modal-content">
            <h2>Add Medicine</h2>
            <div className="two-inputs-transfer">
              <div className="label-input-transfer">
                <TextField
                  required
                  type="number"
                  label="RX Number"
                  variant="outlined"
                  value={medicineNumber}
                  onChange={(e) => {
                    setMedicineNumber(e.target.value);
                  }}
                />
              </div>
              <div className="label-input-transfer">
                <TextField
                  label="RX Name"
                  variant="outlined"
                  value={medicineName}
                  onChange={(e) => {
                    setMedicineName(e.target.value);
                  }}
                />
              </div>
            </div>

            <Button variant="contained" onClick={handleModalSubmit}>
              Add
            </Button>
          </div>
        </Modal>
      </div>
      <br />
      <div className="patient-div-transfer">
        <MessageIcon color="action" />
        &nbsp;
        <Typography gutterBottom variant="h6">
          Notes For Pharmacy (Optional)
        </Typography>
      </div>
      <div className="patient-div-transfer">
        <TextField
          placeholder="Questions & Comments"
          multiline
          rows={4}
          fullWidth
          value={pharmacyNotes}
          onChange={(e) => {
            setPharmacyNotes(e.target.value);
          }}
        />
      </div>
      <br />
      <br />
      <Button variant="contained" color="success" onClick={handleClick}>
        Submit
      </Button>
    </div>
  );
};

export default TransferPrescription;
