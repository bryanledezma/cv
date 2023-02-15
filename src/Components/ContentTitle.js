import '../styles/ContentTitle.css'
//en donde irá la información tecnica

function ContentTitle(props) {
    return (  
        <div className="Content__Title">
            <h1 className="Title__style">{props.children}</h1>
        </div>

    );
}

export {ContentTitle} ;