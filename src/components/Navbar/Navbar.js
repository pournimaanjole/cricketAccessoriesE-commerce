import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {faPhoneVolume} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
function Navbar() {
    return (
        <div>
            <div className='header'>
                <div className='container'>
<ul className='navbar'>
    <li className='navlist'><Link to='/badminton' className='link'>Badminton<FontAwesomeIcon icon={faAngleDown} className='icon' /> </Link>
    <div className='sub-menu'>
        {/* first div */}
<div className='first-div'>
<div>
<h2></h2>
<ul>
    <li>Kashmir illon</li>
    <li>English Willon</li>
</ul>
</div>
<div>

</div>
<div>

</div>
</div>
{/* second div */}

<div className='second-div'>

</div>
<div className='third-div'>

</div>
<div className='fourth-div'>

</div>
<div className='fift-div'>

</div>
    </div>
    
    </li> 

    <li className='navlist'><Link to='/cricket' className='link'>Cricket 
    <FontAwesomeIcon icon={faAngleDown} className='icon'  /></Link> 
    <div className='sub-menu'>
      <div className='four-menu-div'>
<div> 
<h2>Cricket Bats</h2>

<ul><li className='list1'>By Willow</li>
    <li>Kashmir Willow</li>
    <li>English Willow</li>
</ul>

<ul><li className='list1'>By Grade</li>
    <li>Grade 1 Willow</li>
    <li>Grade 2 Willow</li>
    <li>Grade 3 Willow</li>
    <li>Grade 4 Willow</li>
    <li>Grade 5 Willow</li>
    <li>Grade 6 Willow</li>
    <li className='list1'>see all</li>
</ul>

</div>

<div>
<h2>Cricket Shoes</h2>
<ul>
    <li className='list1'>New Balance Shoes</li>
    <li>Rubber Sole</li>
    <li>Spikes</li>
    <li className='list1'>see all</li>
</ul>
</div> 

<div>
<h2>Cricket Accesseries</h2>
<ul>
    <li className='list1'>Batting Gloves</li>
    <li>Batting Pads</li>
    <li>Wicketkeeping Gloves</li>
    <li>Wicketkeeping Pads</li>
    <li className='list1'>see all</li>
</ul>
</div>  
<div>
<h2>Cricket Bags</h2>
<ul>
    <li className='list1'>Wheelie Bags</li>
    <li> Backpacks</li>
    <li>Wicketkeeping Gloves</li>
    <li>Wicketkeeping Pads</li>
    <li className='list1'>see all</li>
</ul>
</div>

<div>
<h2>Cricket Bags</h2>
<ul>
    <li className='list1'>Wheelie Bags</li>
    <li> Backpacks</li>
    <li>Wicketkeeping Gloves</li>
    <li>Wicketkeeping Pads</li>
    <li className='list1'>see all</li>
</ul>
</div>

      </div>
    </div>
    
     </li> 



    <li ><Link to='/tennis' className='link'>Tennis 
    <FontAwesomeIcon icon={faAngleDown} className='icon'  /></Link></li> 
    <li><Link to='/football' className='link'>Football 
    <FontAwesomeIcon icon={faAngleDown} className='icon'  /></Link></li> 
    <li><Link to='/volleyball' className='link'>Volleyball
     <FontAwesomeIcon icon={faAngleDown} className='icon'  /></Link></li> 
    <li><Link to='/sportopedia' className='link'>Sportopedia 
    <FontAwesomeIcon icon={faAngleDown} className='icon'  /></Link></li> 


</ul> 

<div><FontAwesomeIcon icon={faPhoneVolume}  className='phoneicon'/> +91 9087767690</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
