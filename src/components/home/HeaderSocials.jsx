import React from 'react'

const HeaderSocials = () => {
  return (
    <div className="home__socials">
        <a 
            href="https://github.gatech.edu/" 
            className="home__socials-link" 
            target='_blank'
            rel="noopener noreferrer"
        >
            <i class="fa-brands fa-github fa-2x"></i>
        </a>

        <a 
            href="https://www.linkedin.com/in/jack-davis-a498b922a/"
            className="home__socials-link"
            target='_blank'
            rel="noopener noreferrer"
        >
            <i class="fa-brands fa-linkedin fa-2x"></i>
        </a>
    </div>
  )
}

export default HeaderSocials