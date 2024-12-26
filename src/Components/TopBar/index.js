import { Link } from "react-router-dom";
export default function TopBar() {
  return (
    <div className="d-flex shadow" style={{ padding: "0px 20px 0px" }}>
      <h1 style={{ fontFamily: "cursive", color: "#ff274b" }}>Store</h1>
      <Link to="/" className="btn">
        Go to web site
      </Link>
    </div>
  );
}
