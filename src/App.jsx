import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { TaskProvider } from "./context/TaskContext";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";

import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";
import TaskDetails from "./pages/TaskDetails";
import CompletedTasks from "./pages/CompletedTasks";
import Login from "./pages/Login";

import "./App.css";

function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <Routes>

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <div className="app-layout">
                  <Sidebar />

                  <div className="main-area">
                    <Header />

                    <Routes>
                      <Route
                        path="/"
                        element={<Dashboard />}
                      />

                      <Route
                        path="/tasks"
                        element={<Tasks />}
                      />

                      <Route
                        path="/add-task"
                        element={<AddTask />}
                      />

                      <Route
                        path="/tasks/:id"
                        element={<TaskDetails />}
                      />

                      <Route
                        path="/completed"
                        element={<CompletedTasks />}
                      />
                    </Routes>
                  </div>
                </div>
              </ProtectedRoute>
            }
          />

        </Routes>
      </BrowserRouter>
    </TaskProvider>
  );
}

export default App;