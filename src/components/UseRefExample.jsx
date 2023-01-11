import { useRef } from "react";

const UseRefExample = () => {

    let counter = useRef(0);
    let target = useRef(null);
    const handleRef = ()=>{
        counter.current = counter.current + 1;
        console.log(counter);
    }

    const handleTarget = ()=>{
        target.current.textContent = target.current.textContent === "Hello!" ? "Hewooo" : "Hello!";
    }
    return ( 
        <div>
            <p>UseRef is like use state but it doesn't trigger a re render, it's also used to imperatively modify a dom element</p>
            
            <button onClick={handleRef}  className="bg-rose-700 rounded-sm p-3 active:scale-95">Increment Count</button>
            <p>Count: {counter.current}</p>

            <p>Modifying Dom Element:</p>
            <p ref={target}>Hewooo</p>
            <button onClick={handleTarget}  className="bg-rose-700 rounded-sm p-3 active:scale-95">Change Text</button>

        </div>
     );
}
 
export default UseRefExample;