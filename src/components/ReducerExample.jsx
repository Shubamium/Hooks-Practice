import { useReducer, useState } from "react";

const TODO_ACTION = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    SET: "set",
    RESET: "reset" 
}
function counterReducer(state,action){
    switch(action.type){
        case TODO_ACTION.DECREMENT:
            return state - 1;   
        case TODO_ACTION.INCREMENT:
            return state + 1;
        case TODO_ACTION.RESET:
            return 0;
        case TODO_ACTION.SET:
            return action.count;
        default:
            return state;
    }
}

const ReducerExample = () => {
    const [counter, dispatchCounter] = useReducer(counterReducer,0);
    const [sCount, setCount] = useState(0); 
    const [formStatus, setFormStatus] = useState("");

    return ( 
         <div>
            <p>As you can see, there's no need to pass a bunch of modifier function to context anymore, you only need one reducer/dispatch function to pass</p>
             <p>Count:{counter}</p>
             <button onClick={()=>dispatchCounter({type: TODO_ACTION.DECREMENT })} className="bg-rose-700 rounded-sm p-3 active:scale-95 m-2">Decrement </button>
             <button onClick={()=>dispatchCounter({type: TODO_ACTION.INCREMENT })} className="bg-rose-700 rounded-sm p-3 active:scale-95 m-2">Increment</button>
             <button onClick={()=>dispatchCounter({type: TODO_ACTION.RESET })} className="bg-rose-700 rounded-sm p-3 active:scale-95 m-2">Reset</button>

            <form onSubmit={(e)=>{
                e.preventDefault();
                let parsed = Number.parseInt(sCount);
                console.log(parsed);

                let hasLetter = /[a-z]/gi;
                if(sCount.match(hasLetter) === null && !Number.isNaN(parsed)){
                    setFormStatus("");
                    dispatchCounter({type: TODO_ACTION.SET, count:parsed});
                }else{
                    setFormStatus("Failed, The input value is not a number")
                    setTimeout(()=> {setFormStatus("")},4000);
                }
            }}>
                <input type="text" className="bg-rose-700 rounded-sm p-3 active:scale-95 m-2" value={sCount} onChange={(e)=>(setCount(e.target.value))} />
                <button type="submit" className="bg-rose-700 rounded-sm p-3 active:scale-95 m-2" >Set</button>
                <p>{formStatus}</p>
            </form>
         </div> 
    );
}
 
export default ReducerExample;