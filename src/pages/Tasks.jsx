import { useState } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskContext";

function Tasks() {
  const { tasks } = useTasks();

  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("All");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      task.description
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesPriority =
      priority === "All" ||
      task.priority === priority;

    const matchesCategory =
      category === "All" ||
      task.category === category;

    const matchesStatus =
      status === "All" ||
      task.status === status;

    return (
      matchesSearch &&
      matchesPriority &&
      matchesCategory &&
      matchesStatus
    );
  });

  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">WORKSPACE</span>
          <h2>All Tasks</h2>
          <p>
            View, filter and manage your tasks.
          </p>
        </div>
      </div>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="All">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Academic">Academic</option>
          <option value="Personal">Personal</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Raised">Raised</option>
          <option value="Pending">Pending</option>
          <option value="Closed">Closed</option>
        </select>
      </div>

      <div className="task-count">
        Showing {filteredTasks.length} of {tasks.length} tasks
      </div>

      {filteredTasks.length === 0 ? (
        <div className="empty-state">
          <div>🔍</div>
          <h3>No tasks found</h3>
          <p>
            Try changing your search or filters.
          </p>
        </div>
      ) : (
        <div className="task-grid">
          {filteredTasks.map((task) => (
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

export default Tasks;