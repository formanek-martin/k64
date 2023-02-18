import {useEffect} from "react";
import useFetch from "../../../helpers/useFetch.js"

export default function ArticlesList() {
    const jsonAPI = useFetch("jsonapi/");
    
    useEffect(() => {
        jsonAPI.get("node/article")
        .then(data => {
            console.log(data);
        });
    }, []);
    
    
    return (<>      
        <h1>Lorem ipsum dolor</h1>
            
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec condimentum leo. Cras eu tempus eros, quis ullamcorper massa. Sed blandit arcu in ante aliquet eleifend. Suspendisse malesuada risus vitae libero porttitor congue. Sed ultricies ex sed fermentum porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus tempor orci, ut euismod mauris consectetur vitae. Sed iaculis nulla sapien, quis malesuada orci posuere non. Suspendisse id tellus in lacus ullamcorper venenatis sed viverra ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam laoreet eget purus at dictum. Nunc venenatis consequat tellus, id tincidunt augue euismod ac. Curabitur neque orci, faucibus non hendrerit luctus, finibus in sem. Maecenas nec fermentum nulla. Nunc lacinia nisl eu purus pulvinar ullamcorper ut nec tellus.</p>

        <p>Etiam suscipit posuere tristique. Curabitur diam lorem, malesuada sit amet mauris sed, vestibulum condimentum est. Praesent tincidunt mauris eget feugiat sagittis. Duis metus nulla, eleifend eu sem sagittis, convallis mattis mauris. Integer ac faucibus orci, ut ullamcorper lectus. Sed nec blandit dui. Suspendisse commodo lacus quis tellus venenatis, ut fermentum elit eleifend. Morbi suscipit elit ac felis volutpat, a malesuada odio gravida.</p>

        <p>Maecenas vitae tristique quam, vitae dictum est. Cras at nisl id mi imperdiet fringilla et vel arcu. Maecenas et lorem at quam pellentesque consectetur sit amet a ligula. Donec a nunc fringilla, mollis neque et, mattis lacus. Proin in scelerisque nulla, blandit euismod ligula. Suspendisse blandit neque ac orci imperdiet ornare. Mauris luctus mi vitae nunc consectetur cursus. Suspendisse ullamcorper magna ut urna pretium pellentesque. Nunc feugiat, sem eu iaculis efficitur, tellus sem bibendum nisl, et consectetur odio nunc vitae neque. Aliquam ut nisi augue. Sed blandit, neque eu vehicula posuere, velit nunc rutrum ipsum, id cursus justo velit a eros.</p>

    </>);
}