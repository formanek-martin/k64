import {useEffect} from "react";
import useFetch from "../helpers/useFetch.js"

export default function App() {
    const testFetch = useFetch("https://v6.exchangerate-api.com/v6/6a8f3dbacea5f5c5a792ef7c/");
    const jsonAPI = useFetch("http://localhost/k64/k64-dir/web/jsonapi/");


    // useEffect(() => {
    //     testFetch.get("latest/USD")
    //     .then(data => {
    //         console.log(data.conversion_rates.CZK);
    //     });
    // }, []);
    
    useEffect(() => {
        jsonAPI.get("node/testovaci")
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