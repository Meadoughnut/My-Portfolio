// /src/components/Portfolio.jsx
import Project from './Project';
import newsletter from '../assets/images/projects/newsletter.png'
import weather from '../assets/images/projects/weather.png'

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
    {
      title: 'SVG Logo Maker',
      image: newsletter,
      liveLink: 'https://app.screencastify.com/v3/watch/1OepJFx9IyfkO0yksWUI',
      githubLink: 'https://github.com/Meadoughnut/SVG_Logo_Maker',
    },
    {
      title: 'README.md Generator',
      image: newsletter,
      liveLink: 'https://github.com/Meadoughnut/README-Generator',
      githubLink: 'https://app.screencastify.com/v3/watch/seVqhopPcWMU5Le31Znw',
    },
    {
      title: 'Employee Data Tracker',
      image: newsletter,
      liveLink: 'https://app.screencastify.com/v3/watch/Fmz5tTcKPIPAVI7gfwI9',
      githubLink: 'https://github.com/Meadoughnut/Employee-data-tracker',
    },
    {
      title: 'Task Board',
      image: newsletter,
      liveLink: 'https://meadoughnut.github.io/Task_Board/',
      githubLink: 'https://github.com/Meadoughnut/Task_Board',
    },
    
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
