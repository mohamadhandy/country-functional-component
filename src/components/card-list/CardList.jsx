import React from 'react'
import Card from '../card/Card'
import "./cardlist.css"

const CardList = ({ countries }) => {
  return (
    <div className="card-list">
      {countries.map(country => {
        return <Card key={country.name} countries={country} />
      })}
    </div>
  )
}

export default CardList