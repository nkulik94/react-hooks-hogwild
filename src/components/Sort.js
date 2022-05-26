import React from 'react';

function Sort( {sortState, allHogs} ) {

    
    const sortedByName = [...allHogs].sort((a, b) => {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    })

    const sortedByWeight = [...allHogs].sort((a, b) => a.weight - b.weight)

    function handleSort(e) {
        if (e.target.value === 'name') {
            sortState(sortedByName)
        } else if (e.target.value === 'weight') {
            sortState(sortedByWeight)
        } else sortState(allHogs)
    }
    
    return (
        <select onChange={handleSort}>
            <option value=''>--Sort by--</option>
            <option value='name'>Name</option>
            <option value='weight'>Weight</option>
        </select>
    )
}

export default Sort