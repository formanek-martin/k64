import WordCloud from "../elements/WordCloud/WordCloud.js";
import { Helmet } from 'react-helmet-async';
import bg_image from "../../assets/images/chess-bg-01.jpg"; 
import './Homepage.css';

export default function Homepage() {
    return (<>
            {/* <div className="temp-layout" style={{ backgroundImage:`url(${bg_image})` }}>
            </div> */}
            <Helmet>
                <title>Šachy Kobylisy | Homepage</title>
            </Helmet>
            <WordCloud />
        </>
    );
}