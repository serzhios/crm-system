
import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import TabButton from "../TabButtons/TabButton";

import style from "./TodoList.module.scss"

export default function TodoList() {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState('')

    const [filter, setFilter] = useState("All")
const[text, setText] = useState("")
const[textDirty, setTextDirty] = useState(false)
const[textError, setTextError] = useState("поле не меньше 2 и не бюольше 64 знаков")
    const AddTodo = () => {
if(todo.length > 2 && todo.length < 64){
    setTodos([...todos, { todo, completed: false }])
        setTodo('')
        console.log(todo)
}else{

{<div style={{color: "red"}}>{textError}</div>}

}

    }
const blurHandler = (e) => {
    switch(e.target.name){
        case "text":
            setTextDirty(true)
            break
    }
}
    const DeleteTodo = item => {
        setTodos(todos.filter(todo => todo !== item))
    }




    const CompleteTodo = item => {

        setTodos(todos.map(todo => todo === item ? { ...todo, completed: !todo.completed } : todo))


    }
  
let filteredTodo = [];

switch(filter) {
  case "Active":
    filteredTodo = todos.filter(todo => !todo.completed);
    break;
  case "Comp":
    filteredTodo = todos.filter(todo => todo.completed);
    break;
  default:
    // eslint-disable-next-line no-unused-vars
    filteredTodo = [...todos];
}
    return (
        <div>

            <div className={style.conteiner}>
{(todo && textError) && <div style={{color: "red"}}>{textError}</div>}

                <div className={style.form}>
                    <input
                        type="text"
                        name="text"
                        className={style.input}
                        placeholder="Task To Be Done..."
                        value={todo}

                        onChange={e => setTodo(e.target.value)}
                       onBlur={e => blurHandler(e)}
                    />

                    <button
                        className={style.btn}
                        onClick={AddTodo}
                    >
                        Add</button>
                </div>

                <div className={style.button}>
                    <TabButton

                        onClick={() => setFilter("All")}
                         className={filter === "All" ? style.active: ""}
                    >Все</TabButton>
                    <TabButton

                        onClick={() => setFilter("Active")}
                         className={filter === "Active" ? style.active: ""}
                    >В работе</TabButton>
                    <TabButton

                         onClick={() => setFilter("Comp")}
                         className={filter === "Comp" ? style.active: ""}
                    >Сделано</TabButton>
                </div>
            </div>
            {filteredTodo.map((item, index) => (

                <TodoItem
                onEdit={(updatedItem) => {
                    const newTodos = [...todos];
                    const index = newTodos.indexOf(item);
                    if (index > -1) {
                      newTodos[index] = updatedItem;
                      setTodos(newTodos);
                    }
                  }}
                    key={index}
                    item={item}
                    onDelete={DeleteTodo}

                    onComplete={CompleteTodo}

                />


            ))}

        </div>



    )
}