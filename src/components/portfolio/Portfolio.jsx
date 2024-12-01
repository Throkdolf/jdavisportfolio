import React, { useState } from 'react'
import "./portfolio.css"
import Menu from "./Menu"
import Popup from './Popup'

const Portfolio = () => {
  const[items, setItems] = useState(Menu)
  /* buttonPopup is the state itself, setButtonPopup is a function to change the state */
  const[buttonPopup, setButtonPopup] = useState(false)
  const[selectedProject, setSelectedProject] = useState(null)

  const openPopup = (project) => {
    setSelectedProject(project)
    setButtonPopup(true)
  }

  const closePopup = () => {
    setSelectedProject(null)
    setButtonPopup(false)
  }

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    })

    setItems(updatedItems);
  }

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">

        {/* Replace with my projects */}
        <span className="work__item" onClick={() => setItems(Menu)}>Everything</span>
        <span className="work__item" onClick={() => filterItem
          ("Systems")}>Systems</span>
        <span className="work__item" onClick={() => filterItem
          ("Backend")}>Backend</span>
        <span className="work__item" onClick={() => filterItem
          ("Frontend")}>Frontend</span>
      </div>

      {/* Image in this function isn't working correctly */}
      <div className="work__container grid">
        {items.map((elem) => {
          const{id, image, title, category} = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>

              {/*<a href="https://github.gatech.edu/" className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a> */}
              {/*<button onClick={() => setButtonPopup(true)}className="work__button">
                <i className="icon-link work__button-icon"></i>
              </button>*/}

              <button className="work__button" onClick={() => openPopup(elem)}>
                <i className="fa-solid fa-ellipsis"></i>
              </button>
              {selectedProject && (
              <Popup trigger={buttonPopup} setTrigger={closePopup}>
                <h3 className="popup__title">{selectedProject.title}</h3>
                <p className="popup__description">{selectedProject.description}</p>
              </Popup>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio