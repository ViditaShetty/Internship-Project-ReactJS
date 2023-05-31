import React from 'react';
import './infoone.css';
import { useState,useRef,useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import alanBtn from '@alan-ai/alan-sdk-web';


const InfoThree= () => {  
    const handleCat = (e) => {
    };  

  
  return (
    <div  style={{overflowX:"hidden"}}>

      {/*<!--========================= PART 2 MANUAL( WITHOUT MIC)======================--!> */}

    && (
     <div className='general' style={{maxWidth:"70vw"}} id="partTwo">
     <i className="icon-grid"></i>
        <span style={{cursor:"pointer"}}>
        {'\u00A0'}{'\u00A0'}Customer Information -3
        </span>
     
       <div className="userShow ">
        <form className="addProductForm">

        <div className="column_one">
            <div className="addProductItem">
            <label>1. RETAILER NAME 1 </label>
            <input type="text" onChange={handleCat} placeholder=" "  />
            </div>
            <div className="addProductItem">
            <label>2. RETAILER NAME 2 	</label>
            <input type="text" placeholder="" onChange={handleCat} />
            </div>
            <div className="addProductItem">
            <label>3. RETAILER NAME 3 </label>
            <input type="text" placeholder=" " onChange={handleCat} />
            </div>
            <div className="addProductItem">
            <label>4. RETAILER NAME 4 	</label>
            <input type="text" placeholder="" onChange={handleCat} />
            </div>
            <div className="addProductItem">
            <label>5. How Many Times Met by AM in Last 6 months	How Many Times Met</label>
            <input type="text" placeholder="" onChange={handleCat} />
            </div>
            <div className="addProductItem">
            <label>6. How Many Times Met by RM in Last 6 months{'<'}	</label>
            <input type="text" placeholder="" onChange={handleCat} />
            </div>
            <div className="addProductItem">
            <label>7. How Many Mass Input is Given in Last 6 months</label>
            <input type="text" placeholder="" onChange={handleCat} />
            </div>
            <div className="addProductItem">
            <label>8. No. of Diabetes Patients Seen in a month	</label>
            <input type="text" placeholder="" onChange={handleCat} />
            </div>
            <div className="addProductItem">
            <label>9. No. of Patients with Hypertension Seen in a month	</label>
            <input type="text" placeholder="" onChange={handleCat} />
            </div>
            <div className="addProductItem">
            <label>10. No. of Patients with Heart Failure Seen in a month	</label>
            <input type="text" placeholder="" onChange={handleCat} />
            </div>
            <div className="addProductItem">
            <label>11. How many months RCPA done in last 6 months for potential?	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>12. Potential for prescribing Anti-diabetes therapy in value	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>13. Potential for prescribing Anti-hypertensive therapy in value	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>14. Potential for prescribing heart failure therapy in value	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>15. Which molecules(Direct & Indirect) is he prescribing?	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>16. Is he a existing prescriber?	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>17. Which focused brands is he prescribing?	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>     
     </div>
     <div className="column_two">
            <div className="addProductItem">
            <label>18. How many months RCPA done in last 6 months for our prescribing brand?	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>19. What is the value of RCPA current focused brands in last 6 months?	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>20. FY 21-22 GCRM Done?	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>21. FY 21-22 Type of Activity	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>22. FY 21-22 Activity Month	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>23. FY 21-22 Investment Amount Value	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>24. FY 22-23 Type of Activity	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>25. FY 22-23 Investment Amount Value	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>26. FY 22-23 Activity Month	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>27. FY 22-23 Purpose of Doing Activity	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>28. If maintainence how many focused brand SKU is he prescribing?	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>29. If consolidation which focused brand will be added to the doctor?	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>30. If conversion which focused brand will the doctor be converted to?	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>31. Highest supporter of(company?) Give options for top 3 companies	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>32. Highest supportr of(company?) Give options for top 3 companies	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>33. Value given to highest supporter in Rs?	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label>34. Which hospital is the doctor affiliated with?</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            
            <div className="addProductItem">
            <label>Actions</label>
            <button className="addProductButton" style={{display:'block'}}>
            {'\u00A0'}{'\u00A0'} <a href="#" style={{color:"white"}} >  Add Customer      </a>{'\u00A0'}{'\u00A0'}
            </button>
            <button className="addProductButton" style={{display:'block'}}>
            {'\u00A0'}{'\u00A0'} <a href="#" style={{color:"white"}} >   View or Delete Current List       </a>{'\u00A0'}{'\u00A0'}
            </button><br/><br/><br/>
            </div>

        </div>
      </form>
    </div>
     </div>

    </div>
  )
}

export default InfoThree