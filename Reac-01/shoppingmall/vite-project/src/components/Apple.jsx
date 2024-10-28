import { useState } from 'react';
import './home.css';
import {Link, useNavigate} from 'react-router-dom';
export default function Apple() {
    const [text, setText] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        setText('')
        navigate(`/videos/${text}`);

    }
    const  onChangeText = (e) => {
        setText(e.target.value);
    }
    return (
        <>  
            <div className="header">
                <Link to ='/'>Shopping</Link>
                 <Link to = "/videos">Video</Link>
            </div>
        <div className='home_make'>
            <div className='search'>
                <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='검색해주세요' value={text}  onChange= {onChangeText} />
                <button type ="submit">검색</button>
                </form>
                </div>
        </div>
        </>
    )
}