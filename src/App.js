import "./style.css";
import Signup from "./Components/SignUp";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Users from "./Users";
import UpdateUser from "./Components/UpdateUser";
import CreateUser from "./Components/CreateUser";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route path="Users" element={<Users />} />
          <Route path="User/create" element={<CreateUser />} />
          <Route path="Users/:id" element={<UpdateUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
