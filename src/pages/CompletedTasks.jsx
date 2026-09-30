import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskContext";

function CompletedTasks() {
  const { tasks } = useTasks();

  const completedTasks = tasks.filter(
    (task) => task.status === "Closed"
  );

  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">COMPLETED</span>
          <h2>Completed Tasks</h2>
          <p>
            Review all tasks that have been completed.
          </p>
        </div>
      </div>

      {completedTasks.length === 0 ? (
        <div className="empty-state">
          <div>✓</div>
          <h3>No completed tasks</h3>
          <p>
            Completed tasks will appear here.
          </p>
        </div>
      ) : (
        <div className="task-grid">
          {completedTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CompletedTasks;