import { useEffect, useState } from "react";
import AddTodo from "./AddTodo.jsx";
import "./todolist.css";
import Todo from "./Todo.jsx";

export default function TodoList({ filter }) {
const handleUpdate = (update) => {
    setTodos(todos.map((t) => (t.id === update.id ? update : t)));
  };
const handleDelete = (deleted) => {
    setTodos(todos.filter((t) => t.id !== deleted.id));
  };
 
const [todos, setTodos] =useState(readTodosFromLocalStroage()); // 저장하는곳 // 초기값 내부적으로 컴포넌트의 데이터를 기억하고 있다고 하셨습니다. 

const handleAdd = (todo) => setTodos([...todos, todo]);

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  }, [todos])

  const filtered = getFilterItems(todos, filter);
  return (
    <section className="container">
      <ul className="list">
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd}></AddTodo>
    </section>
  );
}
function readTodosFromLocalStroage() { // 값 저장하는 곳 
  console.log('readTodosFromLocalStroage');
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) :[]; 
}

function getFilterItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
