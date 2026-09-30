import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { useTasks } from "../context/TaskContext";

function AddTask() {
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const handleSubmit = (task) => {
    addTask(task);
    navigate("/tasks");
  };

  return (
    <div className="page narrow-page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">CREATE</span>
          <h2>Add New Task</h2>
          <p>
            Create a new task and add it to your workspace.
          </p>
        </div>
      </div>

      <div className="form-panel">
        <TaskForm
          onSubmit={handleSubmit}
          submitText="Create Task"
        />
      </div>
    </div>
  );
}

export default AddTask;