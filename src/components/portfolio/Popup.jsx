import React from 'react'
import './popup.css'

function Popup(props) {
  return (props.trigger) ? (
    <div className="popup__container">
        <div className="popup__inner">
            <button className="close__btn" onClick={() => props.setTrigger(false)}>close</button>
            {props.children}
        </div>
    </div>
  ) : ""
}

export default Popup