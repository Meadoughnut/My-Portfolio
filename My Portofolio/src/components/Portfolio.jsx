// /src/components/Portfolio.jsx
import Project from './Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Insurance Management System',
      image: '/assets/images/project1.png',
      liveLink: 'http://example.com',
      githubLink: 'https://github.com/Meadoughnut/insurance-management-system',
    },
    {
      title: 'Another Cool Project',
      image: '/assets/images/project2.png',
      liveLink: 'http://example.com',
      githubLink: 'https://github.com/Meadoughnut/another-cool-project',
    },
    // Add more projects here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
