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
    <li className='navlist'><Link to='/badminton' className='link'>Badminton<FontAwesomeIcon icon={faAngleDown} className='icon' /> </Link></li> 

    <li className='navlist'><Link to='/cricket' className='link'>Cricket 
    <FontAwesomeIcon icon={faAngleDown} className='icon'  /></Link> 
    <div className='sub-menu'>
      <div className='four-menu-div'>
<div> 
<span className='heading'>Cricket Bats</span>

<ul><li className='list1'>By Willow</li>
    <li><Link to={`/cricketbats/kashmir`} className='list-iteam'>Kashmir Willow</Link></li>
    <li><Link to={`/cricketbats/english`} className='list-iteam'>English Willow</Link></li>
</ul>

<ul><li className='list1'>By Grade</li>
    <li><Link to={'/grade'} className='list-iteam'> Grade 1 Willow </Link> </li>
    <li><Link to={'/grade'} className='list-iteam'> Grade 2 Willow </Link> </li>
    <li><Link to={'/grade'} className='list-iteam'> Grade 3 Willow </Link></li>
    <li><Link to={'/grade'} className='list-iteam'> Grade 4 Willow </Link></li>
    <li><Link to={'/grade'} className='list-iteam'> Grade 5 Willow </Link></li>
    <li><Link to={'/grade'} className='list-iteam'> Grade 6 Willow </Link></li>
    <li className='list1'><Link to={'/grade'} className='list1'> See all </Link></li>
</ul>

</div>

<div>
<span className='heading'>Cricket Shoes</span>
<ul>
   
    <li><Link to={'/newblance'} className='list-iteam'>New Balance Shoes</Link></li>
    <li><Link to={'/rubberSoles'} className='list-iteam'>Rubber Sole</Link></li>
    <li><Link to={'/spkies'} className='list-iteam'>Spikes</Link></li>
    <li className='list1'>see all</li>
</ul>
</div> 

<div>
<span className='heading'>Cricket Accesseries</span>
<ul>
    <li > <Link to={'/battingGloves'} className='list-iteam'>Batting Gloves </Link> </li>
    <li> <Link to={'/battingPads'} className='list-iteam'>Batting Pads</Link> </li>
    <li><Link to={'/wicketkeepingGloves'} className='list-iteam'>Wicketkeeping Gloves</Link>  </li>
    <li> <Link to={'/wicketkeepingPads'} className='list-iteam'>Wicketkeeping Pads</Link></li>
    <li className='list1'>see all</li>
</ul>
</div>  
<div>
<span className='heading'>Cricket Bags</span>
<ul>
    <li > <Link to={'/bags'} className='list-iteam'> Wheelie Bags </Link></li>
    <li><Link to={'/packs'} className='list-iteam'>Backpacks</Link> </li>
    
    <li className='list1'>see all</li>
</ul>
</div>

<div>
<span className='heading'>Cricket Brands</span>
<ul>
    <li > <Link className='list-iteam'>SG</Link></li>
    <li><Link className='list-iteam'> SS</Link> </li>
    <li><Link className='list-iteam'>Adidas</Link> </li>
    <li><Link className='list-iteam'>Adidas</Link></li>
    <li><Link className='list-iteam'>DSC Cricket</Link></li>
    
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
