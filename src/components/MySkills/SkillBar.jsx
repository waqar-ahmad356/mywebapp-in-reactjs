import React from 'react'
import './SkillBar.css';

const SkillBar = ({ name, percentage }) => {
    return (
      <div className="skill">
        <div className="skill-name">{name}</div>
        <div className="skill-bar">
          <div className="skill-progress" style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
    );
  };
  export default SkillBar;
