import React from 'react'

function Header() {
    return (
    <header className="display-flex" id='home'>
        <div className="logo"><a>𝐓𝗋α𝗏𝖾ᥣᥣⱺ</a></div>
        <ul className="nav display-flex">
            <li>
            <a  className='head-a'href="#home" id="">Home</a>
            </li>
            <li>
            <a className='head-a' href="#holiday" id="">About</a>
            </li>
            <li>
            <a className='head-a' href="#contact">Contact</a>
            </li>
        </ul>
    </header>
    )
}

export default Header
