import React from 'react';
import GreaseFilter from './GreaseFilter';
import Sort from './Sort';

function FilterSort( { filterState, changeFilter, sortHogs, allHogs } ) {

    return (
        <div style={{margin: '10px'}}>
            <GreaseFilter filterState={filterState} changeFilter={changeFilter} />
            <Sort sortState={sortHogs} allHogs={allHogs} />
        </div>
    )
}

export default FilterSort