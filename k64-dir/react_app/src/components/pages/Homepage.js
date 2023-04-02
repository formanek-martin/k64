
import WordCloud from "../elements/WordCloud/WordCloud.js";
import { Helmet } from 'react-helmet-async';
import './Homepage.css';
import HomePopup from "../elements/HomePopup/HomePopup.js";

export default function Homepage() {
    return (<>
            <Helmet>
                <title>Šachy Kobylisy | Homepage</title>
            </Helmet>
            <HomePopup />
            <WordCloud />
        </>
    );
}