import React from 'react'

function FoodInfoCard({ food }) {
  return (
    <div>
      <h2>{food.name}</h2>
      <p>price:{food.price}</p>
      <p>Quantity:{food.quantity}</p>
      <p>Serves:{food.serves}</p>
      <p>{food.description}</p>
    </div>
  )
}

export default FoodInfoCard
