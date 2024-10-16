import { useState } from "react";

function Counter() {
    const [counter, setCounter] = (0);
    const handleClick = () => setCounter((prev) => prev +1);

return( 
<>
<div>
    <p>{counter} {counter > 10 ? '🍕':'🍔'}</p>
    <button type = "button" onClick={()=>{
        setCounter(counter + 1);
    }}>+</button>
</div>
<div>
    <p>{counter}</p>
    <button type = "button" onClick={()=>{
        setCounter(counter + 1);
    }}>+</button>
</div>
</>
    );
}

export default Counter;