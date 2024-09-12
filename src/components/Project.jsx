// /src/components/Project.jsx
const Project = ({ project }) => {
    return (
      <div className="project">
        <img src={project.image} alt={`${project.title} screenshot`} />
        <h3>{project.title}</h3>
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
          View Live
        </a>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </div>
    );
  };
  
  export default Project;

  