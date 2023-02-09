import {useEffect} from "react";
import useFetch from "../helpers/useFetch.js"

export default function App() {
    const jsonAPI = useFetch();
    
    useEffect(() => {
        jsonAPI.get("node/article")
        .then(data => {
            console.log(data);
        });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <p>Hello world!</p>
            </header>
        </div>
    );
}