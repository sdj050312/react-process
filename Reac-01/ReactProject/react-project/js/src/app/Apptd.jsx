import React from "react";


export default function Apptd({foods, onUpdate, onDelete}) {
    const {food, status} = food;
    const handleChange = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({...todo, status: e.target.checked ? 'completed' : 'active'})
    } 
    const handleDelete = () => onDelete();

    return <li>
        <input type="checkbox" id = "checkbox" 
        checked ={food.status === 'completed'}
        onChange={handleChange}
        />
        <label htmlFor="checkbox">{food.food}</label>
        <button onClick={handleDelete}>삭제</button>
    </li>;

}