import {useContext} from "react";
import {About, Contact, Introduction, Projects, Toggle} from "./components";
import {ThemeContext} from "./context/context";

const App = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	return (
		<div style={{backgroundColor: darkMode ? "#222" : "white",
			color: darkMode && "white"}}>
			<Toggle/>
			<Introduction/>
			<About/>
			<Projects/>
			<Contact/>
		</div>
	);
};

export default App;