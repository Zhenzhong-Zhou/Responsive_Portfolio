import {useContext} from "react";
import "./toggle.css";
import sun from "../../assets/icons/sun.png";
import moon from "../../assets/icons/moon.png";
import {ThemeContext} from "../../context/context";

const Toggle = () => {
	const theme = useContext(ThemeContext);

	const handleClick = () => {
		theme.dispatch({type: "TOGGLE"});
	};

	return (
		<div className={"toggle"}>
			<img src={sun} alt={"Toggle Icon"} className={"toggle-icon"}/>
			<img src={moon} alt={"Toggle Icon"} className={"toggle-icon"}/>
			<div className={"toggle-button"} onClick={handleClick}
			     style={{left: theme.state.darkMode ? 0 : "25px"}}/>
		</div>
	);
};

export default Toggle;