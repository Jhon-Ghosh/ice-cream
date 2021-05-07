import React from 'react'
import logo from '../../../Assests/Images/logo.svg'
import reactLogo from '../../../Assests/Images/react.svg'
import HeaderStyle from './Header.module.css'

const Header = ()=> {
    return (
        <header>
        <div className='container'>
          <div>
            <img className={HeaderStyle.logo} src={logo} alt='Logo' />
          </div>
          <div className='textRight'>
            <img src={reactLogo} alt='React' className={HeaderStyle.reactLogo} /><strong
              >React</strong
            >
          </div>
        </div>
      </header>
    )
}

export default Header
