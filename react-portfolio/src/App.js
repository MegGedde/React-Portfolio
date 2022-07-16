import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';

function App() {
  const [categories] = useState([
    {
      name: "About Me",
      description:
        "Junior Software Engineer leveraging professional Human Resources background to build programs and problem solve. Recently earned a certificate in full stack development from the University Coding through the University of Minnesota, with newly developed skills in JavaScript, CSS, Node.js, SQL, NoSQL, Express.js, React, RESTful API’s, ORM, MVC and responsive web design. Known as an innovative problem solver, my strong collaboration, communication, and attention to detail skills lead me to being passionate about the code being correct and having a purpose. With each project, my aim is to make the biggest impact on the user experience.  I look forward to leveraging my skills as part of a fast-paced, quality-driven team to build better experiences.",
    },
    { name: "Portfolio", description: "Projects that I have worked on." },
    { name: "Contact", description: "Please share your information and I will reach out to you. If you prefer, you may reach out to me as well." },
    {
      name: "Resume",
      description: "coming soon",
    },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="App">
      <Header currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} categories={categories}/>
        <body>
          <Project currentCategory={currentCategory}></Project>
        </body>
      <Footer />
    </div>
  );
}

export default App;
