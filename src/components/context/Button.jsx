import { useContext } from "react";
import LanguageContext from "./LanguageContext";

const Button = () => {
    return ( 
        <LanguageContext.Consumer>
            {langugage => {
                return <button className="bg-rose-700 rounded-sm p-3 active:scale-95">
                    {langugage === "English" 
                    ? "Read More"
                    : "Baca Selanjutnya"
                    }
                </button> 
            }}
        </LanguageContext.Consumer>
    );
}
 
export default Button;