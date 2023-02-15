import '../styles/Sidebar.css';

function Sidebar(props) {
    return (  
        <div className="Sidebar">
            {props.children}
        </div>
    );
}

export {Sidebar} ;