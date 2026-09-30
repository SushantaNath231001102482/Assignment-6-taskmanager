import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

function Dashboard() {
  const { tasks } = useTasks();

  const total = tasks.length;
  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const raised = tasks.filter(
    (task) => task.status === "Raised"
  ).length;

  const completed = tasks.filter(
    (task) => task.status === "Closed"
  ).length;

  const highPriority = tasks.filter(
    (task) => task.priority === "High" && task.status !== "Closed"
  ).length;

  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">OVERVIEW</span>
          <h2>Dashboard</h2>
          <p>
            Manage and track your tasks from one place.
          </p>
        </div>

        <Link
          to="/add-task"
          className="primary-btn"
        >
          + Add New Task
        </Link>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-icon blue">☷</span>
          <div>
            <p>Total Tasks</p>
            <h3>{total}</h3>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-icon orange">◷</span>
          <div>
            <p>Pending</p>
            <h3>{pending}</h3>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-icon purple">!</span>
          <div>
            <p>High Priority</p>
            <h3>{highPriority}</h3>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-icon green">✓</span>
          <div>
            <p>Completed</p>
            <h3>{completed}</h3>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-panel">
          <div className="panel-heading">
            <h3>Recent Tasks</h3>

            <Link to="/tasks">
              View All
            </Link>
          </div>

          {tasks.slice(0, 4).map((task) => (
            <Link
              to={`/tasks/${task.id}`}
              className="recent-task"
              key={task.id}
            >
              <div>
                <strong>{task.title}</strong>
                <span>
                  {task.category} • {task.priority}
                </span>
              </div>

              <span
                className={`status ${task.status.toLowerCase()}`}
              >
                {task.status}
              </span>
            </Link>
          ))}
        </div>

        <div className="dashboard-panel progress-panel">
          <h3>Task Progress</h3>

          <div className="progress-circle">
            <strong>
              {total === 0
                ? 0
                : Math.round((completed / total) * 100)}
              %
            </strong>
          </div>

          <p>
            {completed} of {total} tasks completed
          </p>

          <div className="progress-bar">
            <span
              style={{
                width:
                  total === 0
                    ? "0%"
                    : `${(completed / total) * 100}%`,
              }}
            ></span>
          </div>

          <div className="progress-info">
            <span>{raised} Raised</span>
            <span>{pending} Pending</span>
            <span>{completed} Closed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;