import TagCloud from "@frank-mayer/react-tag-cloud";
import { useState, useEffect, useCallback } from "react";

import useFetch from "../../../helpers/useFetch.js";
import './WordCloud.css';
import bg_image from "../../../assets/images/chess-bg-01.jpg"; 

export default function WordCloud(props) {
    const [tagList, setTagList] = useState([]);
    const [tagDesc, setTagDesc] = useState("<p>some temporary text</p>");
    const {get, loading} = useFetch("view-tagcloud");

    useEffect(() => {
        get("")
        .then(data => {
            setTagList(data);
            if (data[0].description__value) {
                setTagDesc(data[0].description__value);
            }
        });
    }, []);

    const handleTagClick = (tag: string, ev: MouseEvent) => {
        const matching_tag = tagList.find(item => item.name === tag);
        setTagDesc(matching_tag.description__value);
        console.log(ev.target);
    };

    return (
        <div className="word_cloud-wrapper" style={{ backgroundImage:`url(${bg_image})`}}>
            {!loading && <TagCloud className="word_cloud" style={{ backgroundImage:`url(${bg_image})`}}
                options={(w: Window & typeof globalThis): TagCloudOptions => ({
                    radius: Math.min(600, (w.innerWidth - 100), w.innerHeight) / 2,
                    maxSpeed: "normal",
                    itemClass: "word_cloud--item"
                })}
                onClick={handleTagClick}
                onClickOptions={{ passive: true }}
            >
                {tagList.map(tag => tag.name)}
            </TagCloud>}
            <div className="word_cloud-desc" >
                <div className="word_cloud-desc-inner" dangerouslySetInnerHTML={{__html: tagDesc}} />
            </div>
        </div>
    );
}