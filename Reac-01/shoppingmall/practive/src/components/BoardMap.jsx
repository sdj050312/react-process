import { useState } from "react";
import Board from "./Board";
import Plusbtn from "./Plusbtn.jsx";

export default function BoardMap() {
    const [boards, setBoards] = useState([{ id: '213', name: '손동진', numid: '201934310', status: 'active' }]);

    const handleDelete = (deleted) => {
        setBoards(boards.filter((t) => t.id !== deleted.id));
    };

    const handleUpdate = (update) => {
        setBoards(boards.map((t) => (t.id === update.id ? update : t)));
    };

    const handleAdd = (todo) => setBoards([...boards, todo]);

    return (
        <section>
            <table>
                
                    {boards.map((item) => (
                        <Board 
                            key={item.id} 
                            // item 데이터를 props로 전달
                            onUpdate={handleUpdate} 
                            onDelete={handleDelete} 
                        />
                    ))}
             
            </table>
            <Plusbtn onAdd={handleAdd} />
        </section>
    );
}
