import React from 'react'
import "./card.css"

const Card = ({ country: { name, capital, flags, demonym, population } }) => (
  <div className="card-container">
    <h1>{name}</h1>
    <img
      alt="Country"
      src={flags.png}
      width={'300px'}
      height={'200px'}
    />
    <span>
      Capital of {name} is {capital}
    </span>
    <span>
      Demonym of {name} is {demonym}
    </span>
    <span>
      {name}'s population {population.toLocaleString()}
    </span>
  </div>
)


export default Card