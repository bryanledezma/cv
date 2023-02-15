import '../styles/TextElement.css'
//Un cuadro de texto simple con Titulo y contenido
function TextElement(props) {
    const postitle = "TextElement__title--"+props.pos;
    const postext = "TextElement__text--"+props.pos;

    return (  
        <div className="TextElementContainer">
                <h1 className={postitle}>{props.title}</h1>
                <p className={postext}>{props.text}</p>
        </div>
    );
}

export {TextElement} ;