import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faYoutube} from '@fortawesome/free-solid-svg-icons'
import {faTwitter} from '@fortawesome/free-solid-svg-icons'
import {faInstagram} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <div>
            <div className='footer-container '>
                <div className='footer-up '>
                    <div className='footer-div'>
                        <img src={`https://thegodofsports.com/wp-content/uploads/2022/10/smartphone-1.png`} />
                        <div>
                            <span>NO SHIPPING CHARGES</span>
                            <span>Get free shipping on all orders</span>
                        </div>

                    </div>
                    <div className='footer-div'>
                        <img src={`https://thegodofsports.com/wp-content/uploads/2022/10/back-1.png`} />
                        <div>
                            <span>CUSTOMER SERVICE</span>
                            <span>

                                We are here to serve you</span>
                        </div>
                    </div>
                    <div className='footer-div'>
                        <img src={`https://thegodofsports.com/wp-content/uploads/2022/10/express-delivery-1.png`} />
                        <div>
                            <span>100% AUTHENTIC PRODUCTS</span>
                            <span>

                                All our products are 100% original</span>
                        </div>

                    </div>
                    <div className='footer-div'>
                        <img src={`https://thegodofsports.com/wp-content/uploads/2022/10/padlock-1.png`} />
                        <div>
                            <span>SECURE SHIPPING</span>
                            <span>

                                Do not worry. Your in safe hands.</span>
                        </div>
                    </div>
                </div>
                <div className='footer-down'>
                    <div>
                        <ul>
                            <li><Link to='/' className='footer-link'>Home</Link></li>
                            <li><Link to='/' className='footer-link'>Badminton</Link></li>
                            <li><Link to='/' className='footer-link'>Cricket</Link></li>
                            <li><Link to='/' className='footer-link'>Tennis</Link></li>
                            <li><Link to='/' className='footer-link'>Volleyball</Link></li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li><Link to='/' className='footer-link'>Trending News</Link></li>
                            <li><Link to='/' className='footer-link'>Sports 360</Link></li>
                            <li><Link to='/' className='footer-link'>Good Advice</Link></li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li><Link to='/' className='footer-link'>Term of Services</Link></li>
                            <li><Link to='/' className='footer-link'>Privacy Policy</Link></li>
                            <li><Link to='/' className='footer-link'>Shipping Policy</Link></li>
                            <li><Link to='/' className='footer-link'>Return and Refound Policy</Link></li>

                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li><Link to='/' className='footer-link'>My Account </Link></li>
                            <li><Link to='/' className='footer-link'>Wishlists</Link></li>
                            <li><Link to='/' className='footer-link'>Register</Link></li>


                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><Link to='/' className='footer-link'>About Us </Link></li>
                            <li><Link to='/' className='footer-link'>Contact Us</Link></li>



                        </ul>
                    </div>
                </div>
                <div className='last-footer'>
                    <div>

                   
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
