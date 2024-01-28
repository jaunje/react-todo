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
        <button type="submit">Enviar</button>
        {texto}
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              {task.id}-{task.name}
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

export default ToDoList;
