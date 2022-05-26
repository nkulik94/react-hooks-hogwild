import React from 'react';

function Sort( {sortState, sortBy} ) {


    
    return (
        <select value={sortBy} onChange={e => sortState(e.target.value)} >
            <option value=''>--Sort by--</option>
            <option value='name'>Name</option>
            <option value='weight'>Weight</option>
        </select>
    )
}

export default Sort