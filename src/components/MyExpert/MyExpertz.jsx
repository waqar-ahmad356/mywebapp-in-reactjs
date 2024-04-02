import React from 'react';
import './MyExpertz.css';
import Card from '../Card/Card';
import { faCode, faDatabase, faPaintBrush, faMobileAlt } from '@fortawesome/free-solid-svg-icons';



const MyExpertz = () => {
  return (
    <div className='myexpert'>
      <h1>My Expertise</h1>
      <hr />
      <div className='expertise-cards'>
        <Card
          icon={faCode}
          skillname='Web Development'
          description='Building the functional side of websites using programming languages.'
        />
        <Card
          icon={faDatabase}
          skillname='DataBase Management'
          description='Organizing and storing information for efficient access and analysis.'
        />
        <Card
          icon={faPaintBrush}
          skillname='UI/UX Design'
          description='Focuses on how users interact with and feel about websites and apps (UI) and the overall design process to achieve those goals (UX).'
        />
        <Card
          icon={faMobileAlt}
          skillname='Mobile App Development'
          description='Mobile app development is the process of creating software applications that run on smartphones and tablets, focusing on user experience and utilizing device features.'
        />
      </div>
    </div>
  );
};



export default MyExpertz;
