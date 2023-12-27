import React, { useState } from 'react'
import './Home.css'
import Choise from './../Choise/Choise.json'
import Navbar from '../../components/Navbar/Navbar.js'
import HomeCarosoul from '../../components/HomeCarosoul/HomeCarosoul.js'
import Navbar1 from '../../components/Navbar1/Navbar1.js'
import Card from '../../components/Card/Card.js'
import DiscountCard from '../../components/DiscountCard/DiscountCard.js'
import badmintondata from './../Homeutils/badminton.json'
import cricketdata from './../Homeutils/cricket.json'
import footballdata from './../Homeutils/football.json'
import tennisdata from './../Homeutils/tennis.json'
import oppsimg from './opps.png'
import shoes1 from './shoes.avif'
import shoes2 from './shoes2.avif'
import Footer from '../../components/Footer/Footer.js'
import bat from './bat.jpeg'
import badminto from './badminton.jpeg'
const Home = () => {
  const [choise, setChoise] = useState(Choise)
  const [badminton, setbadminton] = useState(badmintondata)
  const [cricket, setcricket] = useState(cricketdata)
  const [tennis, settennis] = useState(tennisdata)
  const [football, setfootball] = useState(footballdata)
  const [active, setActive] = useState(1)

  const toactive = (index) => {
    setActive(index)
  }
  return (
    <div>
      <Navbar1 />
      <Navbar />
      <HomeCarosoul />
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
<div className='display-head'>
  <div ><span className='our-product'>Our Products</span></div>
  <div className='display-heading'>

    <div onClick={()=>{
      toactive(1)
    }}>
<span>Badminton</span>
    </div>

    <div onClick={()=>{
      toactive(2)
    }}>
<span>Cricket</span>
    </div>

    <div onClick={()=>{
      toactive(3)
    }}>
<span>Tennis</span>
    </div>

    <div onClick={()=>{
      toactive(4)
    }}>
<span>Football</span>

    </div>
    <div onClick={()=>{
      toactive(5)
    }}>
      <span>Volleyball</span>
    </div>

  </div>
</div>

      <div>
        <div >

        
        <div className={active === 1? "display-div contain-active" : " contain"}>
          <div className='display-div'>
          {
            badminton.map((data, index) => {
              const { off, newprice, oldprice, brand, productName, ProductImg } = data

              return (<> <Card off={off} newprice={newprice} oldprice={oldprice} brand={brand} productName={productName} ProductImg={ProductImg} /> </>)
            })
          }
          </div>
         
        </div> 
        </div>
        <div className={active === 2? "display-div contain-active" : "contain"}>
          <div className='display-div'>
          {
            cricket.map((data, index) => {
              const { off, newprice, oldprice, brand, productName, ProductImg } = data

              return (<> <Card off={off} newprice={newprice} oldprice={oldprice} brand={brand} productName={productName} ProductImg={ProductImg} /> </>)
            })
          }
          </div>
         
        </div>
        <div className={active === 3? "display-div contain-active" : "contain"}>
          <div className='display-div'>
          {
            football.map((data, index) => {
              const { off, newprice, oldprice, brand, productName, ProductImg } = data

              return (<> <Card off={off} newprice={newprice} oldprice={oldprice} brand={brand} productName={productName} ProductImg={ProductImg} /> </>)
            })
          }
          </div>
         
        </div>
        <div className={active === 4? "display-div contain-active" : "contain"}>
          <div className='display-div'>

          {
            tennis.map((data, index) => {
              const { off, newprice, oldprice, brand, productName, ProductImg } = data

              return (<> <Card off={off} newprice={newprice} oldprice={oldprice} brand={brand} productName={productName} ProductImg={ProductImg} /> </>)
            })
          }
          </div>
          
        </div> 

        <div className={active === 5? "display-div contain-active" : "contain"}>
          <div className='display-div'>
<img src={oppsimg} className='opps-img'/>

<div><span className='data'>Data is </span><span className='not-fount'>Not Found </span></div>
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Home
