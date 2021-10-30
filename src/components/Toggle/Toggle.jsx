import "./toggle.css";
import sun from "../../assets/icons/sun.png";
import moon from "../../assets/icons/moon.png";

const Toggle = () => {
	return (
		<div className={"toggle"}>
			<img src={sun} alt={"Toggle Icon"} className={"toggle-icon"}/>
			<img src={moon} alt={"Toggle Icon"} className={"toggle-icon"}/>
			<div className={"toggle-button"}>

			</div>
		</div>
	);
};

export default Toggle;