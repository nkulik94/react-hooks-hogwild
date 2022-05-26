import React, { useState } from 'react';
import HogTile from './HogTile';

function HogList( {hogs, greaseFiltered } ) {


    const filteredHogs = hogs.filter(hog => greaseFiltered === 'greased' ? hog.greased : true)

    return (
        <div className="ui grid container">
            {filteredHogs.map(hog => {
                return <HogTile hog={hog} key={hog.name} />
            })}
        </div>
    )
}

export default HogList