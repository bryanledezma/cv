import '../styles/Content.css';


function Content(props) {
    return (  
        <div className="Content">
            {props.children}
        </div>

    );
}

export {Content} ;