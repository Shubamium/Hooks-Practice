import { useContext } from "react";
import Button from "./Button";
import LanguageContext from "./LanguageContext";
const BlogAction = () => {
    let lang = useContext(LanguageContext);
    return ( 
        <div className="blogpost__article-action">
            <p>{lang === "English" 
                ? "Posted on 12 January 2022"
                : "Diposting pada 12 Januari 2022"
            } - 3:50PM</p>
            <Button />
        </div>
     );
}
 
export default BlogAction;