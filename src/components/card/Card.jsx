import React from 'react'

const Card = ({ name, capital, flags, demonym, population }) => {
  return (
    <div className="card-container">
      <h1>{name}</h1>
      <img
        alt="Country image"
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
}

export default Card