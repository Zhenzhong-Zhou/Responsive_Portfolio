import "./project.css";

const Project = () => {
	return (
		<div className={"project"}>
			<div className={"project-browser"}>
				<div className={"project-circle"}></div>
				<div className={"project-circle"}></div>
				<div className={"project-circle"}></div>
			</div>
			<a href={""} target={"_blank"} rel={"noreferrer"}>
				<img src={""} alt={"Project Cover"} className={"project-image"}/>
			</a>
		</div>
	);
};

export default Project;