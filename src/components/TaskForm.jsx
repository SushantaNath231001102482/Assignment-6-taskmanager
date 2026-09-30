import { useState } from "react";

function TaskForm({
  initialTask,
  onSubmit,
  submitText = "Create Task",
}) {
  const [form, setForm] = useState({
    title: initialTask?.title || "",
    description: initialTask?.description || "",
    priority: initialTask?.priority || "Medium",
    category: initialTask?.category || "Academic",
    dueDate: initialTask?.dueDate || "2026-08-28",
    status: initialTask?.status || "Raised",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      setError("Task header is required.");
      return;
    }

    if (!form.description.trim()) {
      setError("Task description is required.");
      return;
    }

    setError("");
    onSubmit(form);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      {error && (
        <div className="form-error">
          {error}
        </div>
      )}

      <div className="form-group full">
        <label>Task Header</label>

        <input
          type="text"
          name="title"
          placeholder="Enter task title"
          value={form.title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group full">
        <label>Task Description</label>

        <textarea
          name="description"
          placeholder="Describe the task..."
          value={form.description}
          onChange={handleChange}
          rows="5"
        />
      </div>

      <div className="form-group">
        <label>Priority</label>

        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <div className="form-group">
        <label>Category</label>

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
        >
          <option value="Academic">Academic</option>
          <option value="Personal">Personal</option>
        </select>
      </div>

      <div className="form-group">
        <label>Due Date</label>

        <input
          type="date"
          name="dueDate"
          value={form.dueDate}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Status</label>

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value="Raised">Raised</option>
          <option value="Pending">Pending</option>
          <option value="Closed">Closed</option>
        </select>
      </div>

      <div className="form-actions">
        <button
          type="submit"
          className="primary-btn"
        >
          {submitText}
        </button>
      </div>
    </form>
  );
}

export default TaskForm;