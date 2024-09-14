// /src/components/Portfolio.jsx
import Project from './Project';
import newsletter from '../assets/images/newsletter.png'
import weather from '../assets/images/weather.png'

const Portfolio = () => {
  const projects = [
    {
      title: 'Newsletter Signup Form',
      image: newsletter,
      liveLink: 'https://meadoughnut.github.io/Newsletter_Sign-up_form/',
      githubLink: 'https://github.com/Meadoughnut/Newsletter_Sign-up_form',
    },
    {
      title: 'Weather App ',
      image: weather,
      liveLink: 'https://meadoughnut.github.io/Weather_App/',
      githubLink: 'https://github.com/Meadoughnut/Weather_App',
    },
    // Add more projects here
  ];

  return (
      <section className='Portfolio'>
  
      <h1> My works</h1>
      
      <div className="projects" >
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}</div>
     
      </section>
  
  );
};

export default Portfolio;
