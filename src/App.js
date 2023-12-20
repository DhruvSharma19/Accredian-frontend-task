import "./App.css";

// Material UI imports
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import Paper from "@mui/material/Paper";
import LockIcon from "@mui/icons-material/Lock";

import Switch from "@mui/material/Switch";
import { useState } from "react";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="App" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100vw", height: "100vh" }}>
      <img
        src="/img/1.jpg"
        alt="Description"
        style={{
          width: '100%', // Set maxWidth to 100%
          height: '100%', // Maintain aspect ratio
          position: "absolute",
          maxWidth: '100%',
          zIndex: "-1"
        }}
      />
      <Paper elevation={3} style={{ padding: "20px", paddingBottom: "50px", backgroundColor: "transparent", borderRadius: "10px" }}>
        <div align="center">
          {checked ? (
            <Chip
              icon={<LockIcon />}
              label="Log In"
              variant="outlined"
              color="info"
            />
          ) : (
            <Chip
              icon={<FaceIcon />}
              label="Sign Up"
              variant="outlined"
              color="info"
            />
          )}
          <br />

          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>

        {checked ? <Login /> : <Signup />}
      </Paper>
    </div>
  );
}

export default App;