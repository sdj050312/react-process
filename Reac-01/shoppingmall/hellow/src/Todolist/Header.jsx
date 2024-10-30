import { useDarkMode } from '../context/Darkmode'
import './header.css'
import {HiMoon, HiSun} from 'react-icons/hi';

export default function Header({filters, filter, onFilterChange}) {
    const {darkMode, toggleDarkMode} = useDarkMode();
    return (
        <header className="header">
            <button onClick= {toggleDarkMode} className='toggle'>
                {!darkMode && <HiSun/>}
                {darkMode && <HiMoon/>}
            </button>
        <ul className="filters">
            {
                filters.map((value ,index)=> <li  key ={index}>

                    <button className="filter" onClick ={()=> onFilterChange(value)}>{value}</button>
                </li>)
            }
        </ul>
        </header>
    )
}