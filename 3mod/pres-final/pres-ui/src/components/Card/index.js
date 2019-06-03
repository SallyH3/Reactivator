import React from 'react';
import './Card.css';

export const Card = (props) => {
  const {number, president, birthYear, deathYear, tookOffice, leftOffice, party} = props

  return(
    <div className='card-holder'>
      <p>{number}</p>
      <p>{president}</p>
      <p>{birthYear}</p>
      <p>{deathYear}</p>
      <p>{tookOffice}</p>
      <p>{leftOffice}</p>
      <p>{party}</p>
    </div>
  )
}

export default Card;