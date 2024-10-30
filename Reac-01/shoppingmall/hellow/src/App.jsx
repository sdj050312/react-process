import './index.css'
import { useState } from 'react'
import './App.css'
import Header from './Todolist/Header'
import Todolist from './Todolist/Todolist'
import { DarkModeProvider } from './context/Darkmode'

const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
    <DarkModeProvider>
       <Header filters= {filters} filter ={filter} onFilterChange ={setFilter}></Header>
      <Todolist filter ={filter}></Todolist>
      </DarkModeProvider>
    </>
  )
}

export default App
