import "./button.css";
import { useState } from "react";
function Button ({title, btn}){

const [number, setNumber] = useState(0);
// 상태 값, 업데이트 하는 함수 변수 업데이트 함수 
// 값, 함수 
    return(
      <>
            <h1>{title}</h1>
            <p>{number}</p>
            <button type = "button" onClick = {()=>{
                setNumber(number +1);
            }}>plus</button>
           <button type = "button" onClick = {()=>{
            setNumber(number * 2)
           }}>x</button>
           <button type = "button" onClick = {()=>{
            setNumber(number * 0)
           }}>%</button>
       </>

    );
}
export default Button;