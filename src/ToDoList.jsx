import { Fragment, useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "pera" },
    { id: 2, name: "manzana" },
  ]);
  const [texto, setTexto] = useState("");
  const handleAddtask = (event) => {
    event.preventDefault();
    if (!texto) return;
    const newTask = {
      id: tasks.length + 1,
      name: texto,
    };
    setTasks([...tasks, newTask]);
    console.log("task añadido");
    setTexto("");
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
            <li className="list-disc" key={task.id}>
              {task.id}-{task.name}
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

export default ToDoList;
