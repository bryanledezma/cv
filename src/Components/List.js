import '../styles/List.css';

function List(props) {
    const breakcolumn = (props.breakcolumn==='true');
    const elements = props.elements;

    if (props.color === 'white'){
        return(
            <div className="ListContainer--side">
                 <ul className="list">{
                    elements.map(element => <li key={element}>{element}</li>)
                 }</ul>
            </div>
        );
    }else{
    
    if(breakcolumn === false) {
        return (  
            <div className="ListContainer">
                 <ul className="list">{
                    elements.map(element => <li key={element}>{element}</li>)
                 }</ul>
            </div>
        );
    }else{
        return (  
            <div className="ListContainer--columns">
                 <ul className="list--columns">{
                    elements.map(element => <li className="listitem--columns" key={element}>{element}</li>)
                 }</ul>
            </div>
        );
    }
    }
    
}

export {List} ;