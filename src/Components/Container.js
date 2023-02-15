import '../styles/Container.css';

function Container(props) {
    return (  
        <div className="Container">
            {props.children}
        </div>

    );
}

export {Container} ;