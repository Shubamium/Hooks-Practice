import { useContext } from "react";
import LanguageContext from "./LanguageContext";

const FeaturesCard = () => {
    let lang = useContext(LanguageContext);
    return ( 
        <div className="features__card bg-slate-500 m-4 rounded-md p-5">
             <h1 className="font-bold text-slate-900 text-lg">
                {lang === "English" 
                ? "Rich Feature"
                : "Fitur Lengkap"
            }
            </h1>    
             <p>{lang === "English"
                    ?"Feature Description "
                        :"Deskripsi Fitur " 
                }Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non sed, dolores alias fuga deserunt quisquam animi suscipit magni quam officia!</p>            
        </div>
     );
}
 
export default FeaturesCard;