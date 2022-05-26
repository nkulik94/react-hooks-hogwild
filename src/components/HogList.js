import React, { useState } from 'react';
import HogTile from './HogTile';

function HogList( {hogs} ) {

    const [renderedHogs, updateList] = useState(hogs)

    return (
        <div className="ui grid container">
            {renderedHogs.map(hog => {
                return <HogTile hog={hog} key={hog.name} />
            })}
        </div>
    )
}

export default HogList