
  import React from 'react'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import './Card.css';
  
  const Card = ({ icon, skillname, description}) => {
    return (
      <div className='skill-card'>
     
      <FontAwesomeIcon icon={icon} className='icon' />
        
        <div className='skillname'>{skillname}</div>
        <div className='percentage'>{description}</div>
      </div>
    );
  };
  export default Card
  