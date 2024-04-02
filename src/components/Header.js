import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {



  return (
    <header className='flex justify-between items-center px-10 py-6 bg-blue-900 text-white shadow-md '>
    <div className='text-xl font-bold'><spna className='text-4xl font-bold text-yellow-600 hover:text-yellow-200'>Waqar</spna> A.</div>
    <nav className='flex space-x-4'>
    <ul className='flex flex-row gap-20  '>
       <li className='font-semibold text-xl capitalize hover:text-yellow-600'><Link to='/'>Home <br/></Link></li>
        <li className='font-semibold text-xl capitalize hover:text-yellow-600'><Link to='/about'>About <br/></Link></li>
       <li className='font-semibold text-xl capitalize hover:text-yellow-600'><Link to='/services'>Services <br/></Link></li> 

    </ul>
 
        

        
    </nav><Link to='/contact' className=' hover:text-yellow-600'><FontAwesomeIcon icon={faPhone} /> +923094247356<br/><FontAwesomeIcon icon={faEnvelope} /> waqarah356@yahoo.com
</Link>   
      
    </header>
  )
}

export default Header
