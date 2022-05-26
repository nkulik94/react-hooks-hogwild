import React from 'react';
import HogTile from './HogTile';

function HogList( {hogs, greaseFiltered, updateVisibility } ) {


    const filteredHogs = hogs.filter(hog => greaseFiltered === 'greased' ? hog.greased : true)

    return (
        <div className="ui grid container">
            {filteredHogs.map(hog => {
                return <HogTile hog={hog} updateVisibility={updateVisibility} key={hog.name} />
            })}
        </div>
    )
}

export default HogList