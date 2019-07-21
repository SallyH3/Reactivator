import React from 'react';

export const Controls = (props) => {
    return  (
      <section className='button-container'>
          <input 
          value='Study list'
          type='submit'
          className='study-button'
          onClick={props.getIncorrectCards}
          />
          <input 
          value='Show all'
          type='submit'
          className='show-all-button'
          onClick={props.getAllCards}
          />
      </section>
    )
}

export default Controls;