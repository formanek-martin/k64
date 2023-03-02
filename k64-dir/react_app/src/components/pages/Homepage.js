import WordCloud from "../elements/WordCloud/WordCloud.js";
import bg_image from "../../assets/images/chess-bg-01.jpg"; 
import './Homepage.css';

export default function Homepage() {
    return (      
        <div className="temp-layout" style={{ backgroundImage:`url(${bg_image})` }}>
            <WordCloud />
        </div>
    );
}