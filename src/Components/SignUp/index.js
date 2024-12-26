import "../../style.css";
import Header from "../Header";
import Form from "../Form";
export default function Signup() {
  return (
    <>
      <Header />
      <Form
        btn="SignUp"
        endPoint="register"
        navigate=""
        hasLocalStorage={true}
      />
    </>
  );
}
