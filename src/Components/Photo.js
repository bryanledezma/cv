import '../styles/Photo.css';


function Photo(props) {
    return (  
        <div className="PhotoContainer">
            <img src={props.src} alt={props.alt} className="Myphoto" />
        </div>

    );
}

export {Photo} ;