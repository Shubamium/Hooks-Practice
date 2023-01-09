import { useContext } from "react";
import LanguageContext from "./LanguageContext";

const Button = () => {
    let lang = useContext(LanguageContext);
    return ( 
    <button className="bg-rose-700 rounded-sm p-3 active:scale-95">{
        lang === "English" 
        ? "Read More"
        : "Baca Selanjutnya"
    }</button> 
    );
}
 
export default Button;