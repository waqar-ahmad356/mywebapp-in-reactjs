import React from 'react'
import './MySkills.css';
import SkillBar from './SkillBar';

const skillsData = [
    { name: 'HTML5', percentage: 90 },
    { name: 'CSS3', percentage: 85 },
    { name: 'ReactJS', percentage: 80 },
    { name: 'MongoDB', percentage: 75 },
    { name: 'MySQL', percentage: 70 },
    { name: 'SQL', percentage: 70 },
    { name: 'JavaScript', percentage: 90 },
    {name:'NodeJS', percentage:70},
    {name:'ExpressJs',percentage:60},
    {name:'SQL',percentage:80}
    // Add more skills as needed
  ];
  
  const MySkills = () => {
    return (
        <div className="container">
          <h1>My Skills</h1>
          <hr/>
          <div className="skills-container">
            {skillsData.map((skill, index) => (
              <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>
        </div>
      );
  };
  
  export default MySkills;
