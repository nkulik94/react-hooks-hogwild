import React, { useState } from 'react';
import ExtendedTile from './ExtendedTile';

function HogTile( {hog} ) {

    const [displayMore, changeDisplay] = useState(false)

    return (
        <div className='ui eight wide column' key={hog.name} onClick={() => changeDisplay(!displayMore)}>
            <h3>{hog.name}</h3>
            <img src={hog.image} alt={hog.name} width='200'></img>
            <p>Click hog to view more details</p>
            {displayMore ? <ExtendedTile hog={hog} /> : null}
        </div>
    )
}

export default HogTile