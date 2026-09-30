import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-icon">✓</div>

        <div>
          <strong>TaskFlow</strong>
          <span>Workspace</span>
        </div>
      </div>

      <nav className="navigation">
        <p className="nav-label">MENU</p>

        <NavLink to="/" end>
          <span>▦</span>
          Dashboard
        </NavLink>

        <NavLink to="/tasks">
          <span>☷</span>
          Tasks
        </NavLink>

        <NavLink to="/add-task">
          <span>＋</span>
          Add Task
        </NavLink>

        <NavLink to="/completed">
          <span>✓</span>
          Completed
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;