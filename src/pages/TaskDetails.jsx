import { Link, useNavigate, useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { useTasks } from "../context/TaskContext";

function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    tasks,
    updateTask,
    deleteTask,
    completeTask,
  } = useTasks();

  const task = tasks.find(
    (item) => item.id === id
  );

  if (!task) {
    return (
      <div className="page">
        <div className="empty-state">
          <div>404</div>
          <h3>Task not found</h3>
          <p>
            The requested task does not exist.
          </p>

          <Link
            to="/tasks"
            className="primary-btn"
          >
            Back to Tasks
          </Link>
        </div>
      </div>
    );
  }

  const handleUpdate = (updatedTask) => {
    updateTask(task.id, updatedTask);
    navigate("/tasks");
  };

  const handleDelete = () => {
    if (window.confirm("Delete this task?")) {
      deleteTask(task.id);
      navigate("/tasks");
    }
  };

  return (
    <div className="page narrow-page">
      <div className="details-header">
        <div>
          <span className="eyebrow">
            {task.id}
          </span>

          <h2>{task.title}</h2>

          <p>
            Raised on{" "}
            {new Date(task.raisedAt).toLocaleString()}
          </p>
        </div>

        <span
          className={`status ${task.status.toLowerCase()}`}
        >
          {task.status}
        </span>
      </div>

      <div className="form-panel">
        <TaskForm
          initialTask={task}
          onSubmit={handleUpdate}
          submitText="Update Task"
        />
      </div>

      <div className="detail-actions">
        {task.status !== "Closed" && (
          <button
            className="complete-large-btn"
            onClick={() => completeTask(task.id)}
          >
            ✓ Mark as Completed
          </button>
        )}

        <button
          className="delete-large-btn"
          onClick={handleDelete}
        >
          Delete Task
        </button>
      </div>
    </div>
  );
}

export default TaskDetails;