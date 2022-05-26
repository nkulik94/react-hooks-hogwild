import React from 'react';

function ExtendedTile( { hog } ) {

    return (
        <div>
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight}</p>
            <p>{hog.greased ? "Greased" : 'Not greased'}</p>
            <p>Highest medal: {hog['highest medal achieved']}</p>
        </div>
    )
}

export default ExtendedTile