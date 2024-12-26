import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  function deleteUser(userid, i) {
    axios.delete(`http://127.0.0.1:8000/api/user/delete/${userid}`).then(() => {
      setUsers((pre) => pre.filter((_, index) => index !== i));
    });
  }

  const showUsers = users.map((user, i) => (
    <tr key={i}>
      <td>{i + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <Link to={`${user.id}`}>
          <i
            className="fa-regular fa-pen-to-square"
            style={{
              color: "rgb(0 255 187)",
              paddingRight: "10px",
              fontSize: "20px",
              cursor: "pointer",
            }}
          />
        </Link>
        <i
          className="fa-solid fa-trash"
          style={{ color: "red", fontSize: "20px", cursor: "pointer" }}
          onClick={() => {
            deleteUser(user.id, i);
          }}
        />
      </td>
    </tr>
  ));

  return (
    <>
      <div style={{ padding: "20px" }}>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>User</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{showUsers}</tbody>
        </table>
      </div>
    </>
  );
}
