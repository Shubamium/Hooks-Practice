import { useState } from "react";
import Select from "react-select";
import BlogPost from "./context/BlogPost";
import Features from "./context/Features";
import LanguageContext from "./context/LanguageContext";
const ContextExample = () => {
    const langOpt = [
        {value:"BI",label:"Bahasa Indonesia"},
        {value:"EN",label:"English"}
    ] 
    let styles = {
        option: (provided,state) => ({
            ...provided,
            fontWeight: state.isSelected ? "bold" : "normal",
            color: "black"
          })
    }
    let [lang, setLang] = useState("English");

    const changeLang = (val)=>{
        let newVal = val.value === "BI" ? "Bahasa Indonesia" : "English";
        setLang(newVal);
    }
    return ( 
        <div>
            <h2>Switch Language</h2>
            <Select styles={styles} options={langOpt} onChange={changeLang}></Select>
            <LanguageContext.Provider value={lang}>
                <BlogPost></BlogPost>
                <Features></Features>
            </LanguageContext.Provider>

        </div> 
    );
}
 
export default ContextExample;