
import { useState } from "react";


export default function Appdo({onAdd}){
    const [text, setText] = useState('');
    const handleChange = (e) => setText(e.target.value);
    const handleSubmit = (e) => {
        e.prventDefault();
        onAdd({id:'고유한값', text, status:'active'})
    }
    const  [foodTems, setOrderFoods] = useState('');
    const handlemap = (e) => {
        e.prventDefault();
        onAdd({id:'요리 주문!', foodTems, status: 'active'});
    }
    const orderChange =(e) => setOrderFoods(e.target.value);

    
    return(
    <div>
    <form action="" onSubmit={handleSubmit}>
    <input type="text" placeholder="add todo" value = {text} onChange={handleChange}/>
    <button>추가!</button>
    </form>
     
    <form action="" onSubmit={handlemap}>
        <input type="text" placeholder="order food" value = {foodTems} onChange={orderChange}/>

    </form>
    




       </div>
    );

}