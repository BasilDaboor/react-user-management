import axios from "axios";
import { useEffect, useState } from "react";

export default function Form(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  // const [formStatus, setFormStatus] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    setFormData({ ...formData, name: props.name, email: props.email });
  }, [props.name, props.email]);

  async function Submit(e) {
    e.preventDefault();
    <></>;
    // let flag = true;
    // if (formData.name.trim() === "") {
    //   flag = false;
    //   setFormStatus("*Name can't be Empty");
    // } else if (formData.password.length < 8) {
    //   flag = false;
    //   setFormStatus("*Password is less than 8");
    // } else if (formData.password_confirmation !== formData.password) {
    //   flag = false;
    //   setFormStatus("*Password doesn't match");
    // } else {
    //   flag = true;
    //   setFormStatus("");
    // }
    // console.log(flag);
    try {
      // if (flag) {
      let res = await axios.post(
        `http://127.0.0.1:8000/api/${props.endPoint}`,
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.password_confirmation,
        }
      );
      // if (res.status === 200) {
      //   props.hasLocalStorage && localStorage.setItem("email", formData.email);
      //   window.location.pathname = `/${props.navigate}`;
      // }
      // }
    } catch (err) {
      setEmailError(err.response.status);
      console.log(emailError);
    }
  }
  return (
    <div className={props.btn === "SignUp" ? "form-container" : ""}>
      <form onSubmit={Submit}>
        <label
          style={{
            fontSize: "25px",
            marginBottom: "10px",
            color: "#ff274b",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {props.btn}
          {/* <span style={{ color: "#f7bcf7" }}></span>: */}
        </label>
        <label>
          <p> Name:</p>
          <input
            placeholder="Name..."
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />
        </label>
        <label>
          <p> Email:</p>
          <input
            required
            type="Email"
            placeholder="Email..."
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
        </label>
        <label>
          <p>Password:</p>
          <input
            type="Password"
            placeholder="Password..."
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
        </label>
        <label>
          <p> Confirm Password:</p>
          <input
            type="Password"
            placeholder="Password..."
            value={formData.password_confirmation}
            onChange={(e) => {
              setFormData({
                ...formData,
                password_confirmation: e.target.value,
              });
            }}
          />
        </label>
        {/* <p style={{ color: "red" }}>{formStatus}</p>
        {emailError === 422 && (
          <p style={{ color: "red" }}>*Email is already taken</p>
        )} */}
        <button type="submit" className="btn">
          {props.btn}
        </button>
      </form>
    </div>
  );
}
