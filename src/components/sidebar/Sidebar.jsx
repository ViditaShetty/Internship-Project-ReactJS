import React from 'react'
import './sidebar.css'
import Logo from '../../assets/logo.svg'
import { useState } from 'react';
import LogoAlembic from '../../assets/Alembic_Pharmaceuticals_Ltd_logo.png';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
  
  const [user, setUser] = useState(false);  // visibility state
  const changeUser=()=>{
    setUser(!user);
  }

  const navigate=useNavigate();

  const handleHome=()=>{
    navigate('/home')
  }

  const handleSignOut=()=>{
    navigate('/')
  }

  const d= new Date();

  return (
    <aside className='aside'>
      <a href="#"className='nav__logo'>
        <img src={LogoAlembic} alt=""/>
      </a>

      <nav className='nav' style={{position:"absolute",top: "18%"}}>
        <div className="nav__menu" >
          <ul className="classList">
            <li className="navItem" onClick={handleHome}><a href="#home" className="nav__link"><i className="icon-home"></i></a>Home</li>
            <li className="navItem" onClick={handleSignOut}><a href="#portfolio" className="nav__link"><i className="icon-layers"></i></a>SignOut</li>
          </ul>
          <ul className="classList">
            <li className="navItem" onClick={changeUser}>
              <a href="#about" className="nav__link"><i className="icon-user-following"></i></a>User
            </li>
          </ul>        


        </div>
      </nav>
          {user && 
            (<div style={{marginTop:"400%",color:"var(--first-color)"}}>
              Sutanu Dutta.<br/>
              {d.getDate()}.{d.getMonth()}.{d.getFullYear()}
            <br/><br/><br/><br/>
            </div>
            )}
      <div className="nav__footer">
        <span className="copyright">&copy; Alembic 2022-23.</span>
      </div>
    </aside>
  )
}

export default Sidebar
