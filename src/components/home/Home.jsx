import React from 'react'
import './home.css'
import Me from '../../assets/avatar-1.svg'
import profileImg from '../../assets/hero.png'
import ShapeOne from '../../assets/shape-1.png'
import ShapeTwo from '../../assets/shape-2.png'
import { useState } from 'react';
import About from '../about/About'
import Sidebar from '../sidebar/Sidebar'


const Home = () => {
    
  const [grp, setGrp] = useState(false);  // visibility state
  const [individual, setIndividual] = useState(false);  // visibility state
  const showGroup=()=>{
    setGrp(!grp);
  }

  const showIndividual=()=>{
    setIndividual(!individual);
  }

  return (
    <>
    <Sidebar/>
    <div className="home__hero">
        <div className="home__hero__text">
          <div className="home__hero__title">MSS<span className="home__hero__green">(Marketing Support System)</span></div>
        </div>
 
        <div className="btn home__hero__img__btn2" onClick={showGroup}>
          <span className="home__hero__img__btn__bold" ></span> 
          GROUP MSS
        </div>
        <div  className="btn home__hero__img__btn" onClick={showIndividual}>
          <span className="home__hero__img__btn__bold"></span>
          INDIVIDUAL MSS
        </div>

       {(individual || grp) &&(
        <About individualProp={individual} grpProp={grp}/>
        )}

    </div>

    </>
  )
}

export default Home