import React from 'react';

const Greet = (props) => {
    console.log(props);
    return (
        <div>
            <h5>Hello {props.name} a.k.a {props.heroname} </h5>
            {props.children}
        </div>
    )
}

export default Greet;