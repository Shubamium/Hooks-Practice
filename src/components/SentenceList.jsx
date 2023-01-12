import { useEffect, useState } from "react";


const SentenceList = ({list, setRange}) => {
    const [sList, setSList] = useState([]);
    
    useEffect(()=>{
        console.log("updating");
        setSList(list());
    },[list]);
    
    return ( 
        <div>
            <button onClick={()=>{
                    setRange(r=>{
                        let newRange = [...r];
                        newRange.push(Math.floor(Math.random() * 3));
                        return newRange;
                    })
                    // listHandler({type:RANGE_ACTION.ADD});
                }}  className="bg-rose-700 rounded-sm p-3 active:scale-95 m-2">Add a random sentence</button>

            {list().map((val,index)=>(
                <div key={index}>
                    <p>- {index} --- {val}</p>
                </div>
            ))}
        </div> 
    );
}
 
export default SentenceList;