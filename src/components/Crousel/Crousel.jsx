import React, { useState } from 'react';
import './Crousel.css';
import project_img from '../../assets/projectimage.webp'
import project_img2 from '../../assets/projectimag2.webp';
import project_img3 from '../../assets/projectimag3.png';
import project_img4 from '../../assets/projectimag4.png';
import project_img5 from '../../assets/projectimag5.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const projects = [
  {
    name: 'Project 1',
    imageUrl: project_img,
    githubLink: 'https://github.com/waqar-ahmad356',
  },
  {
    name: 'Project 2',
    imageUrl: project_img2,
    githubLink: 'https://github.com/waqar-ahmad356',
  },
  {
    name: 'Project 3',
    imageUrl: project_img3,
    githubLink: 'https://github.com/waqar-ahmad356',
  },
  {
    name: 'Project 4',
    imageUrl: project_img4,
    githubLink: 'https://github.com/waqar-ahmad356',
  },
  {
    name: 'Project 5',
    imageUrl: project_img5,
    githubLink: 'https://github.com/waqar-ahmad356',
  }
  // Add more projects as needed
];

const Carousel = () => {
 
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='carousel'>
    <div className="carousel-container">
    <h1>My Projects</h1>
    <hr/>
      <button className="nav-button prev" onClick={goToPrevSlide}>
        Prev
      </button>
      <div className="carousel-slide">
        <img src={projects[currentIndex].imageUrl} alt={projects[currentIndex].name} />
        <a className="github-link" href={projects[currentIndex].githubLink} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
          View on GitHub
        </a>
      </div>
      <button className="nav-button next" onClick={goToNextSlide}>
        Next
      </button>
    </div></div>
  );
};

export default Carousel;