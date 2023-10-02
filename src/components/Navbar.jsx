import React from 'react'
import BurgerLogo from '../assets/burgerlogo.png'
import {Link} from 'react-router-dom'
import '../Styles/Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='main'>
                <img src={BurgerLogo} alt="" />
                <div className='mainLink'>
                        <Link to='/'>Ana Sayfa</Link>
                        <Link to='/menu'>Menü</Link>
                        <Link to='/about'>Hakkımzda</Link>
                        <Link to='/contact'>İletişim</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar