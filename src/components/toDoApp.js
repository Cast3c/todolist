import { useState } from "react";
import ToDo from "./toDo";
import ('./toDoApp.css')

export default function ToDoApp() {
  const [title, setTitle] = useState("");
  const [toDos, setToDos] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newToDo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    const temp = [...toDos];
    temp.unshift(newToDo);

    setToDos(temp);
    setTitle("");
  }

  function handleUpdate(id, value) {
    const temp = [...toDos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setToDos(temp);
  }

  function handleDelete(id) {
    const temp = toDos.filter((item) => item.id !== id);
    setToDos(temp);
  }

  return(
  <div className="toDoContainer">
    <form className="toDoCreateForm">
      <input onChange={handleChange} className="toDoInput" value={title} />
      <input
        onClick={handleSubmit}
        type="submit"
        value="Create toDo"
        className="btnCreate"
      />
    </form>
    <div className="toDosContainer">
      {toDos.map((item) => (
        <ToDo
          key={item.id}
          item={item}
          updateToDo={handleUpdate}
          deleteToDo={handleDelete}
        />
      ))}
    </div>
  </div>
  )
}
