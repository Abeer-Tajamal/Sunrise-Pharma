import {
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import "./CoronaVirusForm.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Coronavirus = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

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

  const handleClick = () => {};

  return (
    <div className="bordered-div">
      <div>
        <Typography variant="h5" gutterBottom>
          Join our Vaccination Waitlist
        </Typography>
        <div className="patient-div-vaccine">
          <PersonIcon color="action" />
          &nbsp;
          <Typography gutterBottom variant="h6">
            Patient Details
          </Typography>
        </div>
        <Typography>Please tell us about yourself</Typography>
      </div>
      <div className="form-div-vaccine">
        <TextField
          variant="outlined"
          label="First Name"
          fullWidth
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </div>
      <div className="form-div-vaccine">
        <TextField
          variant="outlined"
          label="Last Name"
          fullWidth
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>
      <div className="form-div-vaccine">
        <TextField
          variant="outlined"
          label="Email"
          type="email"
          fullWidth
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="form-div-vaccine">
        <TextField
          variant="outlined"
          label="Phone"
          fullWidth
          value={phone}
          onChange={(e) => setPhone(formatMobileNumber(e.target.value))}
        />
        <Typography variant="subtitle1" color="lightgray">
          Cell phone number preferred so we may text you reminders &
          notifications.
        </Typography>
      </div>
      <div className="form-div-vaccine">
        <FormControl sx={{ m: 1, minWidth: 500 }}>
          <InputLabel id="vaccine-input">Offer Vaccine</InputLabel>
          <Select>
            <MenuItem value="flu">Flu (Influenza)</MenuItem>
            <MenuItem value="Shingles">Shingles</MenuItem>
            <MenuItem value="Pneumonia">Pneumonia</MenuItem>
            <MenuItem value="HPV">HPV (human papilloma virus)</MenuItem>
            <MenuItem value="Hepatitis">Hepatitis</MenuItem>
            <MenuItem value="TDAP">TDAP</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="patient-div-vaccine">
        <HomeIcon color="action" />
        &nbsp;
        <Typography gutterBottom variant="h6">
          Pharmacy Location
        </Typography>
      </div>
      <Typography>
        Select which of our participating locations you'd like to use.
      </Typography>
      <br />
      <div>
        <FormControl sx={{ m: 1, minWidth: 500 }} disabled>
          <InputLabel id="demo-simple-select-disabled-label">
            Sunrise Pharmacy
          </InputLabel>
          <Select
            labelId="demo-simple-select-disabled-label"
            id="demo-simple-select-disabled"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <br />
      <Button variant="contained" onClick={handleClick}>
        Join WaitList
      </Button>
    </div>
  );
};

export default Coronavirus;
