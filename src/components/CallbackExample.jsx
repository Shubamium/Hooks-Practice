import { useCallback , useState, useReducer, useRef} from "react";
import SentenceList from "./SentenceList";

const RANGE_ACTION = {
    ADD:"add"
}
function rangeReducer(state,action){
    switch(action){
        case RANGE_ACTION.ADD:
            console.log("add");
            let newRange = [...state];
            newRange.push(Math.floor(Math.random() * 3));
            return newRange;
            break;
        default:
            return state;
    }
}
const CallbackExample = () => {
   
    let [unrelated,setUnrelated] = useState("");
    let [range,setRange] = useState([1,2,0]);
    let sentenceList = useRef(["This is a sentence","This isn't a sentence","I'm not sure about this one"]); 
    
    // const [range, dispatchRange] = useReducer(rangeReducer,{range:[1,2,0]});
    const makeSentence = useCallback(()=>{
        const sentences = range.map((val)=> sentenceList.current[val]);
        return sentences;
    },[range]);
    return (  
        <div>
            <p>UseCallback will memoize a function so that it won't recompute everytime it renders if the value provided in the dependency array does not change. Only use if you have a function that gets pass down to an unrelated component</p>
            <div>
                <button onClick={()=>{setUnrelated(e => e === ""? "Hello!": "")}}  className="bg-rose-700 rounded-sm p-3 active:scale-95 m-2">Say Hello!</button>
                <p>{unrelated}</p>

                <SentenceList list={makeSentence} 
                // listHandler={dispatchRange} RANGE_ACTION={RANGE_ACTION}
                setRange={setRange}
                > </SentenceList>
                
            </div>
            
        </div>
    );
}
 
export default CallbackExample;