import {About, Contact, Introduction, Projects, Toggle} from "./components";

const App = () => {
	return (
		<div>
			<Introduction/>
			<About/>
			<Projects/>
			<Contact/>
			<Toggle/>
		</div>
	);
};

export default App;