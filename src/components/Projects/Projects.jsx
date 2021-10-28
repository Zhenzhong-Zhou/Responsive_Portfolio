import Project from "./Project/Project";
import "./projects.css";

const Projects = () => {
	return (
		<div className={"projects"}>
			<div className={"projects-texts"}>
				<h1 className={"projects-title"}>Create & inspire.</h1>
				<p className={"projects-desc"}>
					Beautiful homes, stunning portfolio styles & a whole lot more awaits
					inside.
				</p>
			</div>
			<div className={"projects-list"}>
				<Project/>
				<Project/>
				<Project/>
			</div>
		</div>
	);
};

export default Projects;