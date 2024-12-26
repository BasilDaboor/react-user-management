import { useState } from "react";
import axios from "axios";
import Header from "../Header";

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [emailError, setEmailError] = useState("");
  async function Submit(e) {
    let flag = true;
    e.preventDefault();
    <></>;

    if (loginForm.password.length < 8) {
      setFormStatus("*Password is less than 8");
    } else {
      setFormStatus("");
    }
    console.log(flag);

    // JSON.stringify(registerForm)

    try {
      if (flag) {
        let res = await axios.post("http://127.0.0.1:8000/api/login", {
          email: loginForm.email,
          password: loginForm.password,
        });
        if (res.status === 200) {
          window.localStorage.setItem("email", loginForm.email);
          window.location.pathname = "/";
          console.log("loggedIn");
        }
      }
    } catch (err) {
      setEmailError(err.response.status);
      console.log(emailError);
    }
  }
  return (
    <>
      <Header />
      <div className="form-container">
        <form onSubmit={Submit}>
          <label
            style={{
              fontSize: "25px",
              marginBottom: "10px",
              color: "#ff274b",
              justifyContent: "center",
            }}
          >
            Log<span style={{ color: "#f7bcf7" }}>In</span>:
          </label>

          <label>
            <p> Email:</p>
            <input
              required
              type="Email"
              placeholder="Email..."
              value={loginForm.email}
              onChange={(e) => {
                setLoginForm({ ...loginForm, email: e.target.value });
              }}
            />
          </label>
          <label>
            <p>Password:</p>
            <input
              type="Password"
              placeholder="Password..."
              value={loginForm.password}
              onChange={(e) => {
                setLoginForm({ ...loginForm, password: e.target.value });
              }}
            />
          </label>
          <p style={{ color: "red" }}>{formStatus}</p>
          {emailError === 422 && (
            <p style={{ color: "red" }}>*Email is NOT Found</p>
          )}
          <button type="submit" className="btn">
            Log in
          </button>
        </form>
      </div>
    </>
  );
}
