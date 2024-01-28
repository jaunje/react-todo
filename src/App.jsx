import ToDoList from "./ToDoList";

function App() {
  return (
    <>
      <div className="container mx-auto flex flex-col justify-center w-full m-10">
        <h1 className="text-3xl font-bold underline text-red-400 mb-4">
          ToDo List
        </h1>
        <ToDoList />
      </div>
    </>
  );
}

export default App;
