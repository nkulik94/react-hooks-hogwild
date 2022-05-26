import React, {useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import FilterSort from "./FilterSort";

import hogs from "../porkers_data";

function App() {
	const [allHogs, updateList] = useState(hogs)
    const [greaseFiltered, updateFilter] = useState('all')


	return (
		<div className="App">
			<Nav />
			<FilterSort filterState={greaseFiltered} changeFilter={updateFilter}/>
			<HogList hogs={allHogs} greaseFiltered={greaseFiltered} />
		</div>
	);
}

export default App;
