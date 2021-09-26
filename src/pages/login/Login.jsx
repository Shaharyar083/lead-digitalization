import React, { useState } from "react";
import TextField from "@mui/material/TextField";

// import image
import login from "../../assets/images/login.svg";

// import style
import "./login.scss";

const Login = () => {
  const [email, setEmail] = useState("1");
  const [pass, setPass] = useState("1");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPass(e.target.value);
  };

  return (
    <>
      <div className="login-page">
        <div className="inner">
          <div className="head">
            <img src={login} alt="login" />
          </div>

          <div className="body">
            <TextField
              error={email === "" ? true : false}
              fullWidth
              required
              id="filled-error"
              label="Email"
              placeholder="Email"
              variant="standard"
              onChange={handleEmail}
            />

            <TextField
              className="text-field"
              error={pass === "" ? true : false}
              fullWidth
              required
              id="filled-error"
              label="Passsword"
              placeholder="Password"
              variant="standard"
              onChange={handlePassword}
            />

            <div className="btn">Login</div>

            <div className="acc">
              <div>
                No account yet? <span className="blu">Register</span>
              </div>
              <div className="blu">Forgot password?</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
