import React from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import FilterSort from "./FilterSort";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<FilterSort />
			<HogList hogs={hogs}/>
		</div>
	);
}

export default App;
