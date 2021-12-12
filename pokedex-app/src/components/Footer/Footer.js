import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <p>Copyright &copy; 2020 Jay Leach</p>
        <div className='social'>
          <a href='https://github.com/leachcoding'>Github</a>
          <a href='https://twitter.com/leachcoding'>Twitter</a>
          <a href='https://www.linkedin.com/in/jayleachcoding/'>LinkedIn</a>
        </div>
      </div>
    </>
  )
}

export default Footer;
