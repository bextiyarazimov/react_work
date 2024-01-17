
import React from 'react'
import './card.css';
import Button from '../Button/Button';


const Card = (props) => {
  return (
        <div className="date">
            <span>{props.text}</span> 
            <p>text</p>
            <Button color={props.Button} />
        
        </div>
  )
}

export default Card


