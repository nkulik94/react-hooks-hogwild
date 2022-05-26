import React, { useState } from 'react';
import ExtendedTile from './ExtendedTile';

function HogTile( {hog, updateVisibility} ) {

    const [displayMore, changeDisplay] = useState(false)

    let details = null
    
    if (hog.visible) {
        details = (
            <div onClick={() => changeDisplay(!displayMore)}>
            <h3>{hog.name}</h3>
            <img src={hog.image} alt={hog.name} width='200'></img>
            <p>Click hog to view more details</p>
            {displayMore ? <ExtendedTile hog={hog} /> : null}
            </div>
        )
    }

    return (
        <div className='ui eight wide column'>
            {details}
            <button onClick={() => updateVisibility(hog.name)}>{hog.visible ? `Hide ${hog.name}` : `Show ${hog.name}`}</button>
        </div>
    )
}

export default HogTile