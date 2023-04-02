import WordCloud from "../elements/WordCloud/WordCloud.js";
import { Helmet } from 'react-helmet-async';
import './Homepage.css';

export default function Homepage() {
    return (<>
            <Helmet>
                <title>Šachy Kobylisy | Homepage</title>
            </Helmet>
            <WordCloud />
        </>
    );
}