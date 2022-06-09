import React, {useState} from 'react'
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import './Nav.css'



const Nav = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)


    return (
        <div className='header'>
            <div className='container'>
                <h1>Cryptocurrency Tracker</h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>About</a>
                        </li>
                    <li>
                        <a href='/'>News</a>
                    </li>
                </ul>
                
                <div className='btn-connect'>
                    <Link to='/Connect'>
                    <button className='btn'>Connect Wallet</button>
                    </Link>
            
                </div>
            </div>
        </div>
    )
}

export default Nav