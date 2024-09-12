// /src/components/Portfolio.jsx
import Project from './Project';
import newsletter from '../assets/images/newsletter.png'
import weather from '../assets/images/weather.png'

const Portfolio = () => {
  const projects = [
    {
      title: 'Insurance Management System',
      image: newsletter,
      liveLink: 'http://example.com',
      githubLink: 'https://github.com/Meadoughnut/insurance-management-system',
    },
    {
      title: 'Another Cool Project',
      image: weather,
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
