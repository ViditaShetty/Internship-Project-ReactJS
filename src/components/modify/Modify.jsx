import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import './modify.css'
import General from './General'
import { useState } from 'react'
import InfoOne from './InfoOne'
import Payment from './Payment'


const Modify = () => {
  const [selectedTab,setSelectedTab]=useState('general');

  return (
    <div style={{marginTop:"-1%"}}>
      <Sidebar/>
      <div className="Tab">
          <>
          <br/>
          <div className="title">MSS modification page</div>
          <ul className="Tab_list">
            <li className={selectedTab==='general'? "Tab_list_item_selected" : "Tab_list_item"} onClick={()=>{setSelectedTab('general')}}>
              General Info
            </li>
            <li className={selectedTab==='infoOne'? "Tab_list_item_selected" : "Tab_list_item"} onClick={()=>{setSelectedTab('infoOne')}}>Customer Info 1</li>
            <li className={selectedTab==='support'? "Tab_list_item_selected" : "Tab_list_item"} onClick={()=>{setSelectedTab('support')}}>Support to other div</li>
            <li className={selectedTab==='roi'? "Tab_list_item_selected" : "Tab_list_item"} onClick={()=>{setSelectedTab('roi')}}>ROI Tracking</li>
            <li className={selectedTab==='pay'? "Tab_list_item_selected" : "Tab_list_item"} onClick={()=>{setSelectedTab('pay')}}>Payment Details | Supporting Docs | Remarks</li>
          </ul>
          </>
      </div>

     {selectedTab==='general' &&
     <General />
      }

      
     {selectedTab==='infoOne' &&
     <InfoOne/>
      }

      
     {selectedTab==='pay' &&
     <Payment/>
      }
      
     {selectedTab==='support' &&
     <General/>
      }

      
     {selectedTab==='roi' &&
     <General/>
      }
    </div>
  )
}

export default Modify