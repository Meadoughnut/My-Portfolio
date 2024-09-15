import html from '../assets/images/skillicons/html.svg'
import css from '../assets/images/skillicons/css.svg'
import javascript from '../assets/images/skillicons/js.svg'
import jquery from '../assets/images/skillicons/jquery.svg'
import bootstrap from '../assets/images/skillicons/bootstrap.svg'
import git  from '../assets/images/skillicons/git.svg'
import  markdown from '../assets/images/skillicons/markdown.svg'
import nodejs from '../assets/images/skillicons/nodejs.svg'
import react from '../assets/images/skillicons/react.svg'
import sass from '../assets/images/skillicons/sass.svg'
import tailwind from '../assets/images/skillicons/tailwind.svg'
import github from '../assets/images/skillicons/github.svg'
import Resumepdf from '../assets/pdf/Meadin_Menbere.pdf'



const Resume = () => {
    const proficiencies = [
      { name: 'HTML', imgSrc: html },
      { name: 'CSS', imgSrc: css },
      { name: 'Javascript', imgSrc: javascript },
      { name: 'JQuery', imgSrc: jquery  },
      { name: 'Bootstrap', imgSrc: bootstrap },
      { name: 'Git', imgSrc: git },
      { name: 'Markdown', imgSrc: markdown },
      { name: 'NodeJs', imgSrc: nodejs },
      { name: 'React', imgSrc: react },
      { name: 'Sass', imgSrc: sass },
      { name: 'Tailwind', imgSrc: tailwind },
      { name: 'Github', imgSrc: github } ];
  
    return (
      <section className="resumesection">
        <br></br>
        

        
        <h2>RESUME</h2>
        <hr></hr>
        <a href={Resumepdf} download="Meadin_Menbere_Resume.pdf">
          <strong>Download My Resume</strong>
        </a>
        
        <h2>SKILLS</h2>
      <hr />
      <ul className="proficiencies-list">
        {proficiencies.map((skill, index) => (
          <li key={index}>
            <img src={skill.imgSrc} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </li>
        ))}
      </ul>
      </section>
    );
  };
  
  export default Resume;
  