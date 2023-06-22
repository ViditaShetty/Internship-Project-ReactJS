import React from 'react'
import './mssentry.css';
import Sidebar from '../sidebar/Sidebar';
import MssNewProduct from '../mssentry/MssNewProduct';
const MssEntry = () => {
  return (
    <div style={{backgroundColor:"hsl(174.36deg 11.42% 92.53%)"}}>
        <Sidebar/>
        <MssNewProduct/>
    </div>
  )
}

export default MssEntry