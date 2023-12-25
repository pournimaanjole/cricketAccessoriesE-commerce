import React from 'react'
import './Navbar1.css'
import logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
const Navbar1 = () => {
    return (
        <div>
            <div className='nav-div'>
                <div className='logo-div'>
                    <img src={logo} className='logo-img' />
                </div>

                <div className='search-div'>
                    <div className='search-second-div'>
                        <input type='text'
                            className='input-box' placeholder='search for a product' />

                        <div className='search-icon'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </div>


                </div>

                <div className='icon-div'>
                    <FontAwesomeIcon icon={faUser} className='icon-height'/>
                    <FontAwesomeIcon icon={faHeart} className='icon-height' />
                    <FontAwesomeIcon icon={faCartPlus} className='icon-height' />
                </div>
            </div>
        </div>
    )
}

export default Navbar1
