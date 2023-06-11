import React from 'react';


import {Link} from 'react-scroll'

const Header = () => {
  return <div className= 'py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
        </a>
        <Link to="contact">
          <button className='btn btn-sm'>Work with me</button>
        </Link>
      </div>
    </div>
    </div>;
};

export default Header; 
