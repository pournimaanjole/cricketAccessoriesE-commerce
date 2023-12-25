import React, { useState } from 'react'
import './Home.css'
import Choise from './../Choise/Choise.json'
import Navbar from '../../components/Navbar/Navbar.js'
import HomeCarosoul from '../../components/HomeCarosoul/HomeCarosoul.js'
import Navbar1 from '../../components/Navbar1/Navbar1.js'
import Card from '../../components/Card/Card.js'
const Home = () => {
  const [choise,setChoise] = useState(Choise)
  return (
    <div>
      <Navbar1/>
     <Navbar/>
    <HomeCarosoul/>
    {/* <div>
      {
        choise.map((data,index)=>{
          const {off,newprice,oldprice,brand,productName,ProductImg} = data
          return(<>
          <Card off={off} newprice={newprice} oldprice={oldprice} brand={brand} productName={productName} ProductImg={ProductImg} />
          </>)
        })
      }
    </div> */}
    </div>
  )
}

export default Home
