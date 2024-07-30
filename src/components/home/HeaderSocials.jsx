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
            <i class="fa-brands fa-github"></i>
        </a>

        <a 
            href="https://www.linkedin.com/in/jack-davis-a498b922a/"
            className="home__socials-link"
            target='_blank'
            rel="noopener noreferrer"
        >
            <i class="fa-brands fa-linkedin"></i>
        </a>

        <a 
            href="mailto:ggg@ggg.com"
            className="home__socials-link" 
            target='_blank'
            rel="noopener noreferrer"
        >
            <i class="fa-solid fa-envelope"></i>
        </a>
    </div>
  )
}

export default HeaderSocials