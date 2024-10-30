import { useState } from "react";
import './addtodo.css';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({onAdd} ) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length === '') {
            return; 
        }
        onAdd({ id: uuidv4(), text, status: 'active' }); // Call uuidv4() to generate a new ID
        setText(''); // Clear the input field after adding
    }

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="add_form">
                <input
                    type="text"
                    placeholder="추가하기"
                    value={text}
                    onChange={handleChange}
                    className="add_input"
                />
                <button type='submit' className="add_btn">추가 버튼</button>
            </form>
        </div>
    );
}
