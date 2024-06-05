import { useState } from "react";

const Counter=()=>{
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
    setCount(count + 1);
    };

    const handleDecrement = () => {
    setCount(count - 1);
    };
    return(
        <>
        <h2>Counter:{count}</h2>
        <div className="btns">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        </div>
        </>
    )
};

export default Counter;