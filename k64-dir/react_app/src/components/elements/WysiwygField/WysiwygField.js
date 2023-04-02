import { useEffect } from 'react';
import parse from 'html-react-parser';
import { updateWysiwygField } from "../../../helpers/helpers";
import './WysiwygField.css';

export default function WysiwygField(props) {
    const id_el = "something";

    let content = props.children;
    content = updateWysiwygField(content);
    
    // TODO make it possible to have more boards or more games in one PGN
    useEffect(() => {
        const id = "board";
        const id_sel = document.querySelector("#" + id);
        const once_class = "k64-chessboard";
       
        if (id_sel && !id_sel.classList.contains(once_class)) {
            id_sel.classList.add(once_class);
            const chessboard_width = id_sel.offsetWidth > 600 ? "600px" : id_sel.offsetWidth + "px";
            
            // load chess library async
            import("@mliebelt/pgn-viewer").then(module => {
                const pgnView = module.pgnView;
                pgnView("board", {
                    pgn: id_sel.innerText,
                    showResult: true,
                    boardSize: chessboard_width,
                    pieceStyle: 'merida',
                    figurine: true
                });
            });
        }
    });
    
    return (
        <div className="k64_wysiwyg">
            {parse(content)}
        </div>
    );
}