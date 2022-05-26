import React from 'react';
import GreaseFilter from './GreaseFilter';
import Sort from './Sort';

function FilterSort( { filterState, changeFilter, sortHogs, sortBy } ) {

    return (
        <div style={{margin: '10px'}}>
            <GreaseFilter filterState={filterState} changeFilter={changeFilter} />
            <Sort sortState={sortHogs} sortBy={sortBy} />
        </div>
    )
}

export default FilterSort