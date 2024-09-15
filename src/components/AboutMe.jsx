
import image from "../assets/images/myphoto.jpeg"
const AboutMe = () => {
    return (
      <section id="about" className="aboutsection">
      <hr></hr>
        <br></br>
         <h1>Hello, I'M  MEADIN  MENBERE</h1>
         <div className="about-content">
          <br></br>
         <img src= {image}  alt="My Photo" className="avatar" width = '50px' height='350px'/> 
        <p>
        I am Front End Developer with a strong foundation in designing user-centric, responsive web interfaces. Skilled in HTML, CSS, JavaScript, and experienced with frameworks like React. Demonstrated ability to collaborate with cross-functional teams to deliver high-quality web applications, continually enhancing user experience and performance. Committed to leveraging cutting-edge technologies and best practices in web development.

        </p>
         </div>
      </section>
    );
  };
  
  export default AboutMe;






  