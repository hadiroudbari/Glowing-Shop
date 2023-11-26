import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div>
      <p>AdminDashboard</p>
      <Link to="/login">Login</Link>
      <hr />
      <Link to="/register">Register</Link>
    </div>
  );
}

export default AdminDashboard;
