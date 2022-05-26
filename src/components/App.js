import React, {useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import FilterSort from "./FilterSort";

import hogs from "../porkers_data";

function App() {
	const [allHogs, updateList] = useState(hogs)
    const [greaseFiltered, updateFilter] = useState('all')
	const [sortedBy, sortHogs] = useState('')
	const [visibleHogs, updateHidden] = useState(allHogs)
	let renderedHogs = visibleHogs

	const sortedByName = [...visibleHogs].sort((a, b) => {
		let x = a.name.toLowerCase();
		let y = b.name.toLowerCase();
		if (x < y) {return -1;}
		if (x > y) {return 1;}
		return 0;
	})
	
	const sortedByWeight = [...visibleHogs].sort((a, b) => a.weight - b.weight)

	if (sortedBy !== '') {
		sortedBy === 'name' ? renderedHogs = sortedByName : renderedHogs = sortedByWeight
	}
		

	return (
		<div className="App">
			<Nav />
			<FilterSort filterState={greaseFiltered} changeFilter={updateFilter} sortBy={sortedBy} sortHogs={sortHogs} />
			<HogList hogs={renderedHogs} greaseFiltered={greaseFiltered} />
		</div>
	);
}

export default App;
