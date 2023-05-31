import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import NewProduct from './NewProduct'
import UserList from './UserList'

const GroupMss = () => {
  return (
    <div style={{backgroundColor:"hsl(174.36deg 11.42% 92.53%)"}}>
        <Sidebar/>
        <NewProduct/>
    </div>
  )
}

export default GroupMss