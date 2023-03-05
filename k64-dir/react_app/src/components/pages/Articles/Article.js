import {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import useFetch from "../../../helpers/useFetch.js";
import Loader from "../../elements/Loader/Loader.js";

export default function Article() {
    const location = useLocation();
    const jsonAPI = useFetch("jsonapi/node/article/");
    const routerAPI = useFetch("router/");
    const [loading, setLoading] = useState(false);
    
    const [articleData, setArticleData] = useState({
        title: "",
        content: ""
    });
    
    useEffect(() => {   
        setLoading(true);
        routerAPI.get("translate-path?path=" + location.pathname)
        .then(data => {
            if (!data.resolved) {
                // TODO: REDIRECT TO 404
                return false;
            }
            const uiid = data.entity.uuid;
            
            // TODO: filter only needed fields to enhance perfo
            jsonAPI.get(uiid)
            .then(data => {
                const fields = data.data.attributes;
                setArticleData({
                    title: fields.title,
                    content: fields.body.value
                });
            })
            .finally(() => {
                setLoading(false);
            });
        });

    }, []);
    
    return (
        <div className="article k-grid">
            <div className="k-grid--center">
                {loading && <Loader />}
                <h1>{articleData.title}</h1>
                <div className="article-content" dangerouslySetInnerHTML={{__html: articleData.content}} />
            </div>
        </div>
    );
}