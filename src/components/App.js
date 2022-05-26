import React, {useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import FilterSort from "./FilterSort";

import hogs from "../porkers_data";

function App() {

	const [allHogs, updateList] = useState(hogs.map(hog => {
		const newHog = hog
		newHog.visible = true
		return newHog
	}))
    const [greaseFiltered, updateFilter] = useState('all')
	const [sortedBy, sortHogs] = useState('')
	let renderedHogs = allHogs

	function sortByName() {
		return renderedHogs = ([...allHogs].sort((a, b) => {
			let x = a.name.toLowerCase();
			let y = b.name.toLowerCase();
			if (x < y) {return -1;}
			if (x > y) {return 1;}
			return 0;
		}))
	}

	function sortByWeight() {
		return renderedHogs = [...allHogs].sort((a, b) => a.weight - b.weight)
	}

	function updateVisibility(hiddenHog) {
		const updatedList = allHogs.map(hog => hog.name !== hiddenHog ? hog : { ...hog, visible: !hog.visible })
		updateList(updatedList)
	}
	

	if (sortedBy !== '') {
		sortedBy === 'name' ? sortByName() : sortByWeight()
	}
		

	return (
		<div className="App">
			<Nav />
			<FilterSort filterState={greaseFiltered} changeFilter={updateFilter} sortBy={sortedBy} sortHogs={sortHogs} />
			<HogList hogs={renderedHogs} greaseFiltered={greaseFiltered} updateVisibility={updateVisibility} />
		</div>
	);
}

export default App;
