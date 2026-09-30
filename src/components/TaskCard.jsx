import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask, completeTask } = useTasks();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(task.id);
    }
  };

  return (
    <div className="task-card">
      <div className="task-card-top">
        <span className={`priority ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>

        <span className={`status ${task.status.toLowerCase()}`}>
          {task.status}
        </span>
      </div>

      <h3>{task.title}</h3>

      <p className="task-description">
        {task.description}
      </p>

      <div className="task-meta">
        <div>
          <span>Category</span>
          <strong>{task.category}</strong>
        </div>

        <div>
          <span>Due Date</span>
          <strong>{task.dueDate}</strong>
        </div>
      </div>

      <div className="task-actions">
        <Link
          className="view-btn"
          to={`/tasks/${task.id}`}
        >
          View Details
        </Link>

        {task.status !== "Closed" && (
          <button
            className="complete-btn"
            onClick={() => completeTask(task.id)}
          >
            Complete
          </button>
        )}

        <button
          className="delete-btn"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;