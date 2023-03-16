import TagCloud from "@frank-mayer/react-tag-cloud";

import useFetch from "../../../helpers/useFetch.js";
import './WordCloud.css';

export default function WordCloud(props) {
    
    return (
        <div>
            <TagCloud className="word_cloud"
                options={(w: Window & typeof globalThis): TagCloudOptions => ({
                    radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
                    maxSpeed: "normal",
                    itemClass: "word_cloud--item"
                })}
                onClick={(tag: string, ev: MouseEvent) => alert(tag)}
                onClickOptions={{ passive: true }}
            >
                {[
                    "Žalý",
                    "Sudý pátek",
                    "Čepelkiáda",
                    "Pěšiny",
                    "Pan Klimeš",
                    "Pusík"
                ]}
            </TagCloud>
        </div>
    );
}