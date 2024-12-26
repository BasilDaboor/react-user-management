import { Link } from "react-router-dom";
export default function Header() {
  function logout() {
    localStorage.removeItem("email");
    window.location.pathname = "/";
  }
  return (
    <nav
      className="shadow"
      style={{
        display: "flex",
        height: "70px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h3 style={{ fontFamily: "cursive", marginLeft: "30px" }}>
        My <span>Website</span>
      </h3>
      <ul>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#any">any</a>
        </li>
      </ul>
      <div style={{ display: "flex", padding: "12px" }}>
        {!localStorage.getItem("email") ? (
          <div style={{ paddingRight: "12px" }}>
            <Link
              to="/Register"
              style={{ textAlign: "center", marginLeft: "5px" }}
              className="btn"
            >
              Register
            </Link>
            <Link
              to="/Login"
              style={{ textAlign: "center", marginLeft: "5px" }}
              className="btn"
            >
              Login
            </Link>
            <Link
              to="/Dashboard"
              style={{ textAlign: "center", marginLeft: "5px" }}
              className="btn"
            >
              Dashboard
            </Link>
          </div>
        ) : (
          <div className="btn" onClick={logout}>
            {" "}
            Log Out
          </div>
        )}
      </div>
    </nav>
  );
}
