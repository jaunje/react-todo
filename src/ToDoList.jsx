import { Fragment, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "react-use";

function ToDoList() {
  const [value, setValue, remove] = useLocalStorage("todolist", {});
  const [tasks, setTasks] = useState([
    { id: uuidv4(), name: "pera", enabled: true },
    { id: uuidv4(), name: "manzana", enabled: true },
  ]);
  const [texto, setTexto] = useState("");
  useEffect(() => {
    setTasks(value);
  }, []);
  useEffect(() => {
    setValue(tasks);
  }, [tasks, setValue]);

  const handleAddtask = (event) => {
    event.preventDefault();
    if (!texto) return;
    const newTask = {
      id: uuidv4(),
      name: texto,
      enabled: false,
    };
    setTasks([...tasks, newTask]);

    console.log("task añadido");
    setTexto("");
  };
  const handleRemoveTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));

    //setTasks(NewTask);
  };
  const handleToogleTask = (id) => {
    console.log("enable / disable task", id);
    setTasks(
      tasks.map((task) => {
        if (task.id == id) {
          return { ...task, enabled: !task.enabled };
        } else {
          return task;
        }
      })
    );
  };
  // const isEnabled = (task) => {
  //   console.log("dentro isEnabled");
  //   task == true
  //     ? "text-green-600 dark:text-green-400"
  //     : "text-red-600 dark:text-red-400";
  // };
  return (
    <Fragment>
      <form onSubmit={handleAddtask} className="form">
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          type="text"
        />
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ml-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="submit"
        >
          Enviar
        </button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <div
              key={task.id}
              role="alert"
              className="rounded-xl border border-gray-100 bg-white p-4 mb-1"
            >
              <div className="flex items-start gap-4">
                <span
                  className={`cursor-pointer ${
                    task.enabled == true
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  <svg
                    onClick={() => handleToogleTask(task.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>

                <div className="flex-1">
                  <strong
                    className={`block font-bold text-gray-900 ${
                      task.enabled == false ? "" : "line-through"
                    }`}
                  >
                    {task.name}
                  </strong>

                  <p className="mt-1 text-sm text-gray-700">ID: {task.id}</p>
                </div>

                <button className="text-gray-500 transition hover:text-gray-600">
                  <span className="sr-only">Dismiss popup</span>

                  <svg
                    onClick={() => handleRemoveTask(task.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </Fragment>
  );
}

export default ToDoList;
