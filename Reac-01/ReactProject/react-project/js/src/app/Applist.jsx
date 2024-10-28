import { useState } from "react";
import Appdo from './Appdo';
import Apptd from "./Apptd";
export default function Applist () {
    const [appitems, setItem] = useState([ {id: '154', name:'youtube', statuse : 'active'}, {id: '111' ,name : 'twiter', status: 'active'}])
    const [foods, setFoods] = useState([{id:'333', food: '오뎅', status:'active'}, {id:'444', foods:'라멘', status:'active'}]);
 
    const handleAdd = (todo) => setItem([...appitems, todo])
    const handlePlus = (food) => setFoods([...foods, food])
    const handleUpdate = (updated) => setFoods(foods.map(t => t.id === updated.id ? updated.map: t));
    const handleDelete = (deleted) => setFoods(foods.filter((t)=> t.id !== deleted.id));
    return(
        <div>
            <ul>
            {
                appitems.map((item)=> 
                    <li key= {item.id}>{item.name}</li>
            )
            }
            </ul>
            <Appdo onAdd ={handleAdd}/>

            <h1>음식!{foods.foods}</h1>
            <ul>
            {
                foods.map((food)=>
                    <Apptd key={food.id} todo ={food} onUpdate ={handleUpdate} onDelete ={handleDelete}/>
                )
            }
            </ul>
            <Appdo onadd ={handlePlus}></Appdo>
        </div>
    );
}