import parse from 'html-react-parser';
import { updateWysiwygField } from "../../../helpers/helpers";
// import LichessPgnViewer from 'lichess-pgn-viewer';


export default function WysiwygField(props) {
    let content = props.children;
    content = updateWysiwygField(content);
    

    // const lpv = LichessPgnViewer(domElement, {
    //     pgn: 'e4 c5 Nf3 d6 e5 Nc6 exd6 Qxd6 Nc3 Nf6',
    // });
      
    // // lpv is an instance of Ctrl, providing some utilities such as:
    // lpv.goTo('first');
    // lpv.goTo('next');
    // lpv.flip();
    // console.log(lpv.game);

    return (
        <div className="k64_wysiwyg">
            {parse(content)}
        </div>
    );
}