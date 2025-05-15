import { useState } from "react";
import style from "./TodoItem.module.scss"

import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaRegSave } from "react-icons/fa";

export default function TodoItem({item,onEdit, onDelete, onComplete}) {

    const[EditItem, setEditItem] = useState(item.todo)
    const[isEditing, setIsEditing] = useState(false)


function handleEditingClick(){
    if(isEditing && onEdit){
        onEdit({...item,todo: EditItem})
    }
    setIsEditing((e) => !e)

}

function handleChange(e){
    setEditItem(e.target.value)
}

let EditItemText = <span className={style.span} style={{
    textDecoration: item.completed
        ? "line-through"
        : "none",
}}>
    {item.todo}
</span>

if (isEditing) {
    EditItemText = <input type="text" required value={EditItem} onChange={handleChange} />
    // btnAction="Save"
}

    return (
        <>




        <div className={style.conteiner}>

            <input
                type="checkbox"
                checked={item.completed}
                onChange={() => onComplete(item)}
            />
            {/* <span className={style.span} style={{
                textDecoration: item.completed
                    ? "line-through"
                    : "none",
            }}>
                {item.todo}
            </span> */}
            {EditItemText}
            <div>

                <button className={style.btn} onClick={handleEditingClick}>{isEditing ? <FaRegSave /> : <CiEdit />}</button>
                <button className={style.btn1} onClick={() => onDelete(item)}> <MdDelete /></button>

            </div>

        </div>
        </>
    )
}