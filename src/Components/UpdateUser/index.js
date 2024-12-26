import { useEffect, useState } from "react";
import Form from "../Form";
import "./style.css";
export default function UpdateUser() {
  const [updateForm, setUpdateForm] = useState({
    name: "",
    email: "",
  });

  const id = window.location.pathname.split("/").slice(-1)[0];
  <></>;
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
      .then((res) => res.json())
      .then((d) =>
        setUpdateForm({ ...updateForm, name: d[0].name, email: d[0].email })
      )
      .catch((e) => console.log(e));
  }, []);

  <></>;

  return (
    <>
      <Form
        btn="Update"
        endPoint={`user/update/${id}`}
        navigate="Dashboard/users"
        hasLocalStorage={false}
        name={updateForm.name}
        email={updateForm.email}
      />
    </>
  );
}
