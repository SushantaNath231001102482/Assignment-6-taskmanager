import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem("taskManagerAuth", "true");

    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-icon">✓</div>

        <h1>TaskFlow</h1>

        <p>
          Sign in to access your task management
          workspace.
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            required
          />

          <input
            type="password"
            placeholder="Password"
            required
          />

          <button type="submit">
            Sign In
          </button>
        </form>

        <small>
          Demo authentication — any username and password
          will work.
        </small>
      </div>
    </div>
  );
}

export default Login;