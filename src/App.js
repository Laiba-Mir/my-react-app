// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header className="header">Crash Course Transcript</header>
      <h1>Courses available</h1>
      <div className="scroll-container">
        <img src="https://tse1.mm.bing.net/th?id=OIP.HjkiJBSYcQbvnLD1r1NmOQHaEK&pid=Api&P=0&h=220" alt="Java" />
        <img src="https://tse2.mm.bing.net/th?id=OIP.jAnUHAXc0u0R04OzhsrCPAAAAA&pid=Api&P=0&h=220" alt="Javascript" />
        <img src="https://tse1.mm.bing.net/th?id=OIP.wXn88A-eYmSm0hx-bbsh6AHaEK&pid=Api&P=0&h=220" alt="Python" />
        <img src="https://tse4.mm.bing.net/th?id=OIP.9I3WTP-A64QWXFCqXwQ8GwHaEK&pid=Api&P=0&h=220" alt="C++" />
        <img src="https://tse1.mm.bing.net/th?id=OIP.ZPSBmQi0t8aCfES2QZDKMQAAAA&pid=Api&P=0&h=220" alt="C#" />
      </div> 
      <h1>Recent Video</h1>
      <div className="container">
        <div id="video">
          <iframe src="https://www.youtube.com/embed/Ez8F0nW6S-w"></iframe>
        </div>
        
        <div className="box" id="box">
          <h4>Github</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At magni laboriosam rerum sequi facere tempore libero
          nihil illum eius sapiente? Pariatur facere hic voluptate beatae, possimus repudiandae quia quos suscipit, eum
          consectetur voluptatibus voluptatem.</p>
        </div>

        <div id="video2">
          <iframe src="https://www.youtube.com/embed/Zg4-uSjxosE"></iframe>
        </div>

        <div className="box2" id="box2">
          <h4>Javascript</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At magni laboriosam rerum sequi facere tempore libero
          nihil illum eius sapiente? Pariatur facere hic voluptate beatae, possimus repudiandae quia quos suscipit, eum
          consectetur voluptatibus voluptatem.</p>
        </div>
      </div>
      
      <div className="table">
        <h1 id="tab">Certified Courses</h1>
        <table className="tb" cellspacing="50px">
          <tbody>
            <tr>
              <td><img src="https://tse1.mm.bing.net/th?id=OIP.82Afydj4wkFCDRRcbUDlCAHaFj&pid=Api&P=0&h=220" alt="Neural Network" /></td>
              <td>Coursera</td>
              <td><a href="https://www.coursera.org/learn/neural-networks-deep-learning">Neural Networks and Deep Learning </a></td>
            </tr>
            
            <tr>
              <td><img src="https://tse3.mm.bing.net/th?id=OIP.ExUMGcgLhnkYGwDJXWDd1QHaF8&pid=Api&P=0&h=220" alt="Web Designing" /></td>
              <td>Coursera</td>
              <td><a href="https://www.coursera.org/courses?query=web%20design">Web Designing </a></td>
            </tr>
            
            <tr>
              <td><img src="https://tse4.mm.bing.net/th?id=OIP.CjGRy9RM_WiFSQyJcosXvgHaFU&pid=Api&P=0&h=220" alt="Python" /></td>
              <td>Coursera</td>
              <td><a href="https://www.coursera.org/courses?query=python">Python </a></td>
            </tr>
          </tbody>
        </table>
      </div>

      <footer>
        <section id="clientsection">
          <h1 className="h-primary center"></h1>
          <div id="clients">
            <div className="client-items">
              <img src="clipart2889200.png" alt="Our clients" />
            </div>
            <div className="client-items">
              <img src="new.png" alt="Our clients" />
            </div>
            <div className="client-items">
              <img src="hp-logo.svg" alt="Our clients" />
            </div>
            <div className="client-items">
              <img src="skype-removebg-preview.png" alt="Our clients" />
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}



export default App;
