import React, { useEffect, useState } from "react";

export function Application() {
  const [tasks, setTasks] = useState([
    { description: "Create client", completed: true },
    { description: "Fetch from server", completed: false },
  ]);

  async function loadTasks() {
    const res = await fetch("/api/tasks");
    setTasks(await res.json());
  }

  useEffect(() => {
    loadTasks();
  }, []);
  return (
    <>
      <h1>Task application</h1>
      {tasks.map(({ description, completed }) => (
        <li>
          <input type="checkbox" checked={completed} /> {description}
        </li>
      ))}
    </>
  );
}
