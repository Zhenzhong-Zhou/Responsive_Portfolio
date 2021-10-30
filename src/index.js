import reactDOM from "react-dom";
import App from "./App";
import {ThemeProvider} from "./context/context";

reactDOM.render(
	<ThemeProvider>
		<App/>
	</ThemeProvider>, document.getElementById("root"));