import {useEffect} from "react";
import useFetch from "../helpers/useFetch.js";
import WordCloud from "./elements/WordCloud/WordCloud.js";
import './App.css';
import bg_image from "../assets/images/chess-bg-01.jpg.jpg"; 

export default function App() {
    const jsonAPI = useFetch();
    
    useEffect(() => {
        jsonAPI.get("node/article")
        .then(data => {
            console.log(data);
        });
    }, []);

    return (
        <div className="app" style={{ backgroundImage:`url(${bg_image})` }}>
            <WordCloud />
        </div>
    );
}