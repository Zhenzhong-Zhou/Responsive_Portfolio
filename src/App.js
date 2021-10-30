import {About, Contact, Introduction, Projects, Toggle} from "./components";

const App = () => {
	return (
		<div>
			<Toggle/>
			<Introduction/>
			<About/>
			<Projects/>
			<Contact/>
		</div>
	);
};

export default App;