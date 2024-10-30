import './todo.css';
import { FaCheckCircle } from "react-icons/fa";
export default function Todo({ todo, onUpdate, onDelete }) {
    const { id, text, status } = todo;

    const handleChange = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({ ...todo, status});
    };

    const handleDelete = () => onDelete(todo);

    return (
        <li class ="chart-bx">
            <input
                className="checkbx"
                type="checkbox"
                id={id} // 고유한 ID 생성
                checked={status === 'completed'}
                onChange={handleChange}
            
            />
        
            <label htmlFor={id} className="lable_box"><FaCheckCircle className='icon-lable'/>{text}</label>
            <button onClick={handleDelete} class = "delete-btn">삭제</button> {/* onClick 핸들러 추가 */}
        </li>
    );
}
