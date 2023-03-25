function ListLink(props) {
   const objetos = props.objetos;
    
    
    return (  
            <div className="ListContainer">
                 <ul className="list">{
                    objetos.map(object => 
                    <li key={object.desc}>
                        <a href={object.url}>{object.desc}</a>
                    </li>
                    )
                 }</ul>
            </div>
    );
}

export {ListLink};