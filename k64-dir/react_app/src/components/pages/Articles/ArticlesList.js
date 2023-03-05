import {useState, useEffect} from "react";
import useFetch from "../../../helpers/useFetch.js";
import {Link} from "react-router-dom";
import Loader from "../../elements/Loader/Loader.js";

export default function ArticlesList() {
    const {get, loading} = useFetch("jsonapi/");
    const [articles, setArticles] = useState([]);
    console.log("rendered ArticlesList");
    
    useEffect(() => {
        get("node/article?page[limit]=5&sort=-created&fields[node--article]=field_description,title,path")
        .then(data => {
            console.log("used effect");
            setArticles(data.data);
        });
    }, []);
    
    return (
        <div className="articles_list k-grid">
            <div className="k-grid--center">  
                <h1>výpis článků</h1>
                <div className="articles_list-content">
                    {loading && <Loader />}
                    {articles.map(article => {
                        return (
                            <div className="article_push" key={article.id}>
                                <h2>{article.attributes.title}</h2>
                                <p>{article.attributes.field_description}</p>
                                <Link to={article.attributes.path.alias}>přečíst článek</Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}