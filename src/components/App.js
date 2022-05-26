import React, {useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import FilterSort from "./FilterSort";

import hogs from "../porkers_data";

function App() {
	const [allHogs, updateList] = useState(hogs)
    const [greaseFiltered, updateFilter] = useState('all')
	const [sortedHogs, sortHogs] = useState(allHogs)

	return (
		<div className="App">
			<Nav />
			<FilterSort filterState={greaseFiltered} changeFilter={updateFilter} allHogs={allHogs} sortHogs={sortHogs} />
			<HogList hogs={sortedHogs} greaseFiltered={greaseFiltered} />
		</div>
	);
}

export default App;
