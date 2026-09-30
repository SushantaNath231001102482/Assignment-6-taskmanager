import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("taskManagerAuth");
    navigate("/login");
  };

  return (
    <header className="top-header">
      <div>
        <h1>TaskFlow</h1>
        <p>Task Management System</p>
      </div>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </header>
  );
}

export default Header;