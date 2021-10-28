import "./project.css";

const Project = ({image, source, visit}) => {
	return (
		<div className={"project"}>
			<div className={"project-browser"}>
				<div className={"project-circle"}/>
				<div className={"project-circle"}/>
				<div className={"project-circle"}/>
			</div>
			<a href={visit} target={"_blank"} rel={"noreferrer"}>
				<img src={image} alt={"Project Cover"} className={"project-image"}/>
			</a>
			<a  href={source} target={"_blank"} rel={"noreferrer"}>source</a>
		</div>
	);
};

export default Project;