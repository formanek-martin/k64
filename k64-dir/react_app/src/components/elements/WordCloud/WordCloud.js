import TagCloud from "@frank-mayer/react-tag-cloud";
import './WordCloud.css';

export default function WordCloud(props) {
    
    return (
        <TagCloud className="word_cloud"
            options={(w: Window & typeof globalThis): TagCloudOptions => ({
                radius: Math.min(700, w.innerWidth, w.innerHeight) / 2,
                maxSpeed: "normal",
                itemClass: "word_cloud--item"
            })}
            /*onClick={(tag: string, ev: MouseEvent) => alert(tag)}*/
            onClickOptions={{ passive: true }}
        >
            {[
                "Žalý",
                "Sudý pátek",
                "Čepelkiáda",
                "Pešiny",
                "Pan Klimeš",
                "Pusík"
            ]}
        </TagCloud>
    );
}