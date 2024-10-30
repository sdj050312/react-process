import {useState} from 'react'; 

import {v4 as uuidv4} from 'uuid';

export default function AddBook() {

    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length ==='' ) {
            return; 
        }
        onAdd({id : uuidv4(), text, status: 'active'});
        setText('');
    }
    const handleChange = (e) => {
        setText(e.target.value);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='추가하기' value = {text} onChange ={handleChange}/>
            </form>
        </div>
    )
}