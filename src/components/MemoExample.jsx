import { useMemo, useState } from "react";

const MemoExample = () => {

    let [unrelated,setUnrelated] = useState("This is unrelated message");
    let [useMem, setUseMem] = useState(false);
    let [calcIncrease,setCalcIncrease] = useState(1); 
    const expensiveCalc = ()=>{
        let result = 0;
        for(let i = 0;i < calcIncrease*100;i++){
            console.log(i);
            result += i;
        }
        return result;
    }
    const expensiveCalcWithMemo = useMemo(()=>{
        let result = 0;
        for(let i = 0;i < calcIncrease*100;i++){
            console.log(i);
            result += i;
        }
        return result;
    },[calcIncrease]);

    return (  
        <div>
            <p>UseMemo will memoize a value so that it won't recompute everytime it renders if the value provided in the dependency array does not change. Only use if you have expensive calculation that doesn't need to be changed</p>

            <p>This value doesn't get recomputed unless you press the button below</p>
            <p>{useMem ? expensiveCalcWithMemo : expensiveCalc()}</p>

            <button onClick={()=>{setCalcIncrease((ci)=> ci+1)}} className="bg-rose-700 rounded-sm p-3 active:scale-95 m-2" >Change Variable in Memo's Dependency</button>
            <br></br>
            <p className="font-bold">{unrelated}</p>
            <button onClick={()=>{setUnrelated(Math.random() > 0.5? "This message is changed now the component will re-render" :"randomized")}} 
            className="bg-rose-700 rounded-sm p-3 active:scale-95 m-2" >Change Other Unrelated State</button>

            <p>As you can see the function will recompute in the console if you're not using memo</p>
            <p>It won't lag if you're using memo becasuse the variable won't re render</p>
           
            <label htmlFor="memo">Use Memo? </label>
            <input type="checkbox" name="usemem" id="memo" onChange={(e)=>{setUseMem(e.target.checked);console.log(e.target.checked)}} />
        </div>
    );
}
 
export default MemoExample;