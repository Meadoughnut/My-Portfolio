// /src/components/Portfolio.jsx
import Project from './Project';
import MHabesha from '../assets/images/projects/homepage.png'
import LibraryOfCongressSearch from '../assets/images/projects/resultpage.png'
import weather from '../assets/images/projects/weather.png'
import SVG from '../assets/images/projects/svg.png'
import Readme from '../assets/images/projects/readme.png'
import EmployeeData from '../assets/images/projects/employeedata.png'
import TaskBoard from '../assets/images/projects/taskboard.png'

const Portfolio = () => {
  const projects = [
    {
      title: 'MHabesha Clothing',
      image: MHabesha,
      liveLink: 'https://meadoughnut.github.io/MHabesha/',
      githubLink: 'https://github.com/Meadoughnut/MHabesha',
    },
    {
      title: 'Library Of Congress Search',
      image: LibraryOfCongressSearch,
      liveLink: 'https://meadoughnut.github.io/Library-of-Congress-Search/',
      githubLink: 'https://github.com/Meadoughnut/M-Habesha-Market',
    },
    {
      title: 'Weather App ',
      image: weather,
      liveLink: 'https://meadoughnut.github.io/Weather_App/',
      githubLink: 'https://github.com/Meadoughnut/Weather_App',
    },
    {
      title: 'SVG Logo Maker',
      image: SVG,
      liveLink: 'https://app.screencastify.com/v3/watch/1OepJFx9IyfkO0yksWUI',
      githubLink: 'https://github.com/Meadoughnut/SVG_Logo_Maker',
    },
    {
      title: 'README.md Generator',
      image: Readme,
      liveLink: 'https://github.com/Meadoughnut/README-Generator',
      githubLink: 'https://app.screencastify.com/v3/watch/seVqhopPcWMU5Le31Znw',
    },
    {
      title: 'Employee Data Tracker',
      image: EmployeeData,
      liveLink: 'https://app.screencastify.com/v3/watch/Fmz5tTcKPIPAVI7gfwI9',
      githubLink: 'https://github.com/Meadoughnut/Employee-data-tracker',
    },
    {
      title: 'Task Board',
      image: TaskBoard,
      liveLink: 'https://meadoughnut.github.io/Task_Board/',
      githubLink: 'https://github.com/Meadoughnut/Task_Board',
    },
    
  ];

  return (
      <section id="portfolio" className='Portfolio'>
  
      <h1> My works</h1>
      
      <div className="projects" >
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}</div>
     
      </section>
  
  );
};

export default Portfolio;
