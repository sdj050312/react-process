import { useState } from "react";
export default function Plusbtn({onAdd}) {
const [text, setText] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length === '') {
        return;
    }
    onAdd({id : '121', text, status: 'active'})
}

 const handleChange = (e) => {
    setText(e.target.value);
 }

    return(
        <>
         <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="check" onChange={handleChange} value = {text}/>
                <button type ="submit">추가</button>
            </form>
         </div>
        
        </>
    )
}