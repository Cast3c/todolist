import { useState } from "react";

export default function ToDo({ item, updateToDo, deleteToDo }) {
  const [isEdit, setIsEdit] = useState(false);

  function FormEdit(){

    const [newValue, setNewValue] = useState(item.title)

    function handleSubmit(e){
        e.preventDefault()
    }

    function handleChange(e){
        const value = e.target.value
        setNewValue(value)
    }

    function handleClick(){
        updateToDo(item.id, newValue)
        setIsEdit(false)
    }

    return( 
    <form className="toDoUpdateForm" onSubmit={handleSubmit}>
        <input type="text" className="toDoInput" onChange={handleChange} value={newValue}/>
        <button className="button" onClick={handleClick}>Update</button>
    </form>
    )
  }

  function ToDoElement(){
    return( 
    <div className='toDoInfo'>
        <span className='toDoTitle'>{item.title}</span> 
        <button className="button" onClick={() => setIsEdit(true)}>Edit</button>
        <button className="buttonDelete" onClick={(e) => deleteToDo(item.id)}>Delete</button> 
    </div>
    )
  }

  return(
  <div className="toDo">
    {isEdit ? <FormEdit/> : <ToDoElement /> }
  </div>
  )
}
