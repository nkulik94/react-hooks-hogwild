import React from 'react';

function HogTile( {hog} ) {

    return (
        <div className='ui eight wide column' key={hog.name}>
            <h3>{hog.name}</h3>
            <img src={hog.image} alt={`${hog.name}'s picture`} ></img>
        </div>
    )
}

export default HogTile