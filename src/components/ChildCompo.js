import React from 'react';

const ChildCompo = (props) => {
    return (
        <div>
            <button onClick={() => props.click('Child')}>Click Me !!!!!!</button>
        </div>
    )
}

export default ChildCompo;