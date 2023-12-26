import React, { useState } from 'react'
import './Home.css'
import Choise from './../Choise/Choise.json'
import Navbar from '../../components/Navbar/Navbar.js'
import HomeCarosoul from '../../components/HomeCarosoul/HomeCarosoul.js'
import Navbar1 from '../../components/Navbar1/Navbar1.js'
import Card from '../../components/Card/Card.js'
import DiscountCard from '../../components/DiscountCard/DiscountCard.js'
import shoes1 from './shoes.avif'
import shoes2 from './shoes2.avif'
import bat from './bat.jpeg'
import badminto from './badminton.jpeg'
const Home = () => {
  const [choise,setChoise] = useState(Choise)
  return (
    <div>
      <Navbar1/>
     <Navbar/>
    <HomeCarosoul/>
    {/* <div className='display'>
      {
        choise.map((data,index)=>{
          const {off,newprice,oldprice,brand,productName,ProductImg} = data
          return(<>
          <Card off={off} newprice={newprice} oldprice={oldprice} brand={brand} productName={productName} ProductImg={ProductImg} />
          </>)
        })
      }
    </div> */}
    <div className='discount-display'>
    <DiscountCard img={shoes1} />
    <DiscountCard img={shoes2} />
    
    <DiscountCard img={bat} />
    <DiscountCard img={badminto} />
    </div>
   


    </div>
  )
}

export default Home
