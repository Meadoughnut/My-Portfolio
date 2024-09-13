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
    <div >
      <h1>Please, Take a look at my works</h1>
      <section>
      
      <div className="projects" >
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
      </section>
    </div>
  );
};

export default Portfolio;
