import { Fragment, useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "pera", enabled: true },
    { id: 2, name: "manzana", enabled: true },
  ]);
  const [texto, setTexto] = useState("");
  const handleAddtask = (event) => {
    event.preventDefault();
    if (!texto) return;
    const newTask = {
      id: tasks.length + 1,
      name: texto,
      enabled: false,
    };
    setTasks([...tasks, newTask]);
    console.log("task añadido");
    setTexto("");
  };
  const isEnabled = (task) => {
    console.log("dentro isEnabled");
    task == true
      ? "text-green-600 dark:text-green-400"
      : "text-red-600 dark:text-red-400";
  };
  return (
    <Fragment>
      <form onSubmit={handleAddtask}>
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
            <li
              key={task.id}
              className={`flex items-center space-x-3 rtl:space-x-reverse ${
                task.enabled == false ? "" : "line-through"
              }
              `}
            >
              <svg
                className={`flex-shrink-0 w-3.5 h-3.5 ${
                  task.enabled == true
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path stroke="currentColor" d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
              <span>
                {task.id}-{task.name}
              </span>
              {isEnabled}
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

export default ToDoList;
