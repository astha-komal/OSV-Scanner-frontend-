import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate("/signin");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">OSV Scanner</Link>
      {isAuthenticated && (
        <button className="btn-text" onClick={handleSignOut}>Sign out</button>
      )}
    </nav>
  );
}