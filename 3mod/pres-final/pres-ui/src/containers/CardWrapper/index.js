import React from 'react';
import Card from '../../components/Card';
import './CardWrapper.css';

const CardWrapper = ({presidents}) => {

  const presCards = presidents.map((pres, index) => {
    return (<Card 
      key={pres.id}
      number={pres.number}
      president={pres.president}
      birthYear={pres.birth_year}
      deathYear={pres.death_year}
      tookOffice={pres.took_office}
      leftOffice={pres.left_office}
      party={pres.party}
    />)
  })

    return(
      <div className='card-container'>
        <section className='individual-card'>
          {presCards}
        </section>
      </div>
    )
  }
  export default CardWrapper;