import '../styles/Footer.css'

function Footer(props) {
    return ( 
        <div className="footer">
            {props.children}
        </div>
     );
}

export {Footer};