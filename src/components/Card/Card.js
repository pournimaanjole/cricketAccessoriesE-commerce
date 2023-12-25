import React from 'react'

const Card = ({off,newprice,oldprice,brand,productName,ProductImg}) => {
  return (
    <div>
        <img src={ProductImg[1]} />
      <h1>{off}</h1>
      <h2>{newprice}</h2>
      <h3>{oldprice}</h3>

    </div>
  )
}

export default Card
