import React from 'react';

function GreaseFilter( {filterState, changeFilter} ) {

    return (
        <select value={filterState} onChange={e => e.target.value === 'greased' ? changeFilter('greased') : changeFilter('all')}>
            <option value='all'>All hogs</option>
            <option value='greased'>Greased Hogs</option>
        </select>
    )
}

export default GreaseFilter