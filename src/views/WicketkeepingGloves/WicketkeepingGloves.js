import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Navbar1 from '../../components/Navbar1/Navbar1'
import ProductCard from '../../components/ProductCard/ProductCard'
import wicket from './../CricketAccessories/WicketkeepingGloves.json'
const WicketkeepingGloves = () => {
    const [ wicketgloves,setwicketgloves] = useState(wicket)
  return (
    <div>
     <Navbar1/>
     <Navbar/>
     <div className='main-div-kashmir'>
                <div className='right-div'>
                    <div className='first'>
                        <h3>CATEGORIES</h3>
                        <div className='first-div'>
                            <div><input type="checkbox" id="all-categories" className='all-categories' />
                                <label htmlFor='all-categories' className='label'>ALL CATEGORIES</label> </div>

                            <div> <span className='plus'>+</span></div>
                        </div>

                        <div className='first-div'>
                            <div>
                                <input type='checkbox' id='cricket' className='all-categories' />
                                <label htmlFor='cricket' className='label'>Cricket</label>
                            </div>
                            <div>
                                <span className='plus'>+</span>
                            </div>

                        </div>


                    </div>
                    <div className='second'>
                        <h3>BRANDS</h3>
                        <div className='first-div'>
                            <div><input type="checkbox" id="all-categories" className='all-categories' />
                                <label htmlFor='all-categories' className='label'>DSC</label> </div>

                            <div> <span className='plus'>(76)</span></div>
                        </div>

                        <div className='first-div'>
                            <div>
                                <input type='checkbox' id='cricket' className='all-categories' />
                                <label htmlFor='cricket' className='label'>New Balance</label>
                            </div>
                            <div>
                                <span className='plus'>(28)</span>
                            </div>

                        </div>


                    </div>
                    <div className='third'>
                        <h3>PRICE</h3>
                        <div className='third-div'>

                            <div>
                                <input type="checkbox" id="all-categories" className='all-categories' />
                                <label htmlFor='all-categories' className='label'>ALL</label>
                            </div>

                            <div>
                                <input type="checkbox" id="all-categories" className='all-categories' />
                                <label htmlFor='all-categories' className='label'>0-1699</label>
                            </div>

                            <div>
                                <input type="checkbox" id="all-categories" className='all-categories' />
                                <label htmlFor='all-categories' className='label'>1700-2,999</label>
                            </div>

                            <div>
                                <input type="checkbox" id="all-categories" className='all-categories' />
                                <label htmlFor='all-categories' className='label'>3,000-4,999</label>
                            </div>

                            <div>
                                <input type="checkbox" id="all-categories" className='all-categories' />
                                <label htmlFor='all-categories' className='label'>5,000-7,999</label>
                            </div>
                            <div>
                                <input type="checkbox" id="all-categories" className='all-categories' />
                                <label htmlFor='all-categories' className='label'>8,000-9,999</label>
                            </div>



                            <div>
                                <input type="checkbox" id="all-categories" className='all-categories' />
                                <label htmlFor='all-categories' className='label'>over 9,999</label>
                            </div>









                        </div>


                    </div>


                </div>

                <div className='left-div'>
                    <select className='selecttag'>
                        <option>by defalt selected</option>
                        <option>by defalt selected</option>
                        <option>by defalt selected</option>
                        <option>by defalt selected</option>
                        <option>by defalt selected</option>
                        <option>by defalt selected</option>

                    </select>
                    <div className='disply-product'>


                        {
                            wicketgloves.map((data, index) => {
                                const { off, newprice, oldprice, brand, productName, ProductImg } = data

                                return (<> <ProductCard off={off} newprice={newprice} oldprice={oldprice} brand={brand} productName={productName} ProductImg={ProductImg} /> </>)
                            })
                        }
                    </div>
                </div>
            </div>
    </div>
  )
}

export default WicketkeepingGloves
