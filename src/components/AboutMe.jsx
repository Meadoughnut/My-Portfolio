// /src/components/AboutMe.jsx
import image from "../assets/images/myphoto.jpeg"


const AboutMe = () => {
    return (
      <section className="aboutsection">
        <div>
        <hr></hr>
        
       
        <br></br>
        {/* <div class='aboutmesection'> */}
         <h1>Hello, I'M  MEADIN  MENBERE</h1>
        <p>
        I am Front End Developer with a strong foundation in designing user-centric, responsive web interfaces. Skilled in HTML, CSS, JavaScript, and experienced with frameworks like React. Demonstrated ability to collaborate with cross-functional teams to deliver high-quality web applications, continually enhancing user experience and performance. Committed to leveraging cutting-edge technologies and best practices in web development.

        </p></div>
         <img src= {image}  alt="My Photo" className="avatar" width = '350px' height='350px'/> 
      </section>
    );
  };
  
  export default AboutMe;
  