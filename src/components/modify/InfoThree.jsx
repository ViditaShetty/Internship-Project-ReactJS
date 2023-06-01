import React from 'react';
import './infothree.css';
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

      {/*<!--========================= PART 3======================--!> */}

    && (
     <div className='general' style={{maxWidth:"70vw"}} id="partTwo">
     <i className="icon-grid"></i>
        <span style={{cursor:"pointer"}}>
        {'\u00A0'}{'\u00A0'}Customer Information -3
        </span>
     
       <div className="userShow ">
        <form className="addProductForm3">
           <div className='column_of_three'>
              <div className="addProductItem">
              <label> RETAILER NAME 1 </label>
              <input type="text" onChange={handleCat} placeholder=" "  />
              </div>
              <div className="addProductItem">
              <label> CONT NO 	</label>
              <input type="text" placeholder="" onChange={handleCat} />
              </div>
              <div className="addProductItem">
              <label> PERSON NAME 1</label>
              <input type="text" placeholder=" " onChange={handleCat} />
              </div>
            </div>
            <div className='column_of_three'>
              <div className="addProductItem">
              <label>RETAILER NAME 2	</label>
              <input type="text" placeholder="" onChange={handleCat} />
              </div>
              <div className="addProductItem">
              <label> CONT NO 	</label>
              <input type="text" placeholder="" onChange={handleCat} />
              </div>
              <div className="addProductItem">
              <label>PERSON NAME 2	</label>
              <input type="text" placeholder="" onChange={handleCat} />
              </div>
            </div>
            <div className='column_of_three'>
              <div className="addProductItem">
              <label> RETAILER NAME 3</label>
              <input type="text" placeholder="" onChange={handleCat} />
              </div>
              <div className="addProductItem">
              <label>CONT NO 	</label>
              <input type="text" placeholder="" onChange={handleCat} />
              </div>
              <div className="addProductItem">
              <label> PERSON NAME 3</label>
              <input type="text" placeholder="" onChange={handleCat} />
              </div>
            </div>
            <div className='column_of_three'>
              <div className="addProductItem">
              <label>RETAILER NAME 4	</label>
              <input type="text" placeholder="" onChange={handleCat} />
              </div>
              <div className="addProductItem">
              <label> CONT NO 	</label>
              <input type="text" placeholder="" onChange={handleCat}  />
              </div>
              <div className="addProductItem">
              <label> PERSON NAME 4	</label>
              <input typse="text" placeholder="" onChange={handleCat}  />
              </div>
            </div>


<br/><br/>


            <div className="column_of_three">
              <div className="addProductItem">
              <label> STOCKIST NAME 1</label>
              <input type="text" placeholder="" onChange={handleCat}  />
              </div>
              <div className="addProductItem">
              <label> CONT NO.	</label>
              <input type="text" placeholder="" onChange={handleCat}  />
              </div>
            </div>
            <div className="column_of_three">
              <div className="addProductItem">
              <label> STOCKIST NAME 2</label>
              <input type="text" placeholder="" onChange={handleCat}  />
              </div>
              <div className="addProductItem">
              <label>CONT NO.</label>
              <input type="text" placeholder="" onChange={handleCat}  />
              </div>
            </div>
            <div className="column_of_three">
              <div className="addProductItem">
              <label> STOCKIST NAME 3</label>
              <input type="text" placeholder="" onChange={handleCat}  />
              </div>  
              <div className="addProductItem">
              <label> CONT NO.</label>
              <input type="text" placeholder="" onChange={handleCat}  />
              </div>
            </div>
            <div className="column_of_three">
              <div className="addProductItem">
              <label> STOCKIST NAME 4</label>
              <input type="text" placeholder="" onChange={handleCat}  />
              </div>   
              <div className="addProductItem">
              <label> CONT NO.</label>
              <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            </div>

<br/><br/>
          <div className="column_of_three">
            <div className="addProductItem">
              <label> PRESCRIBED BRAND</label>
              <select name="brand" id="brand">
                              <option value="40012066"> ATECARD -D (N) 15 TABS</option>
                              
                              <option value="40000575"> ATECARD 25 14 TABS</option>
                              
                              <option value="40007048"> ATECARD 25 MG 14 TABS</option>
                              
                              <option value="40000576"> ATECARD 50 14 TABS</option>
                              
                              <option value="40009523"> ATECARD 50 MG 14 TABS</option>
                              
                              <option value="40000581"> ATECARD AM 14 TABS</option>
                              
                              <option value="40012065"> ATECARD AM 15 TABS</option>
                              
                              <option value="40000580"> ATECARD D 14 TABS</option>
                              
                              <option value="40006004"> Atecard 50mg 14 Tabs</option>
                              
                              <option value="40009268"> Atecard 50mg 14 Tabs</option>
                              
                              <option value="50001768"> DUBATRAN 110 10 CAPS</option>
                              
                              <option value="50001769"> DUBATRAN 150 10 CAPS</option>
                              
                              <option value="50001767"> DUBATRAN 75 10 CAPS</option>
                              
                              <option value="50001388"> ETERNEX - T Tablets 10TABS</option>
                              
                              <option value="50001441"> ETERNEX M 1000 10 TABS</option>
                              
                              <option value="50001442"> ETERNEX M 500 10 TABS</option>
                              
                              <option value="40004057"> GLISEN 1 TAB 10 S</option>
                              
                              <option value="40007049"> GLISEN 2 10 TABS</option>
                              
                              <option value="40004058"> GLISEN 2 TAB 10 S</option>
                              
                              <option value="50000370"> GLISEN 2 TABLET 10 TAB</option>
                              
                              <option value="50001600"> GLISEN MF 1 MG 15 TABS</option>
                              
                              <option value="50001887"> GLISEN MF FORTE 2 15 TABS</option>
                              
                              <option value="50002012"> GLISEN PM -2 15 TABS</option>
                              
                              <option value="50001800"> GLISEN VM 1/0.3 MG 10 TABS</option>
                              
                              <option value="50001801"> GLISEN VM 2/0.3 MG 10 TABS</option>
                              
                              <option value="50001003"> GLISEN VM1 10 TABS</option>
                              
                              <option value="50001004"> GLISEN VM2 10 TABS</option>
                              
                              <option value="40005016"> Glisen MF 1 mg  10 Tab</option>
                              
                              <option value="40005017"> Glisen MF 2 mg  10 Tab</option>
                              
                              <option value="40005239"> Glisen MF Forte 1 10 Tab</option>
                              
                              <option value="40005240"> Glisen MF Forte 2 10 Tab</option>
                              
                              <option value="40005020"> Glisen PM 1 mg 10 tab</option>
                              
                              <option value="40005021"> Glisen PM 2 mg 10 tab</option>
                              
                              <option value="50001587"> KINPHOS 10 TABS</option>
                              
                              <option value="40000573"> METOFIX- XL 1000 10 S TAB</option>
                              
                              <option value="40009377"> METOFIX-XL 1000 (N) 10</option>
                              
                              <option value="40012903"> METOFIX-XL 1000 MG 15 TAB</option>
                              
                              <option value="40006005"> Metofix XL 500 10 S Tab</option>
                              
                              <option value="40009269"> Metofix XL 500 10 S Tab</option>
                              
                              <option value="40009369"> TELLZY 20 15 TABS</option>
                              
                              <option value="40011438"> TELLZY 20 MG 15 TABS</option>
                              
                              <option value="40009370"> TELLZY 40 15 TABS</option>
                              
                              <option value="40011437"> TELLZY 40 MG 15 TABS</option>
                              
                              <option value="40009371"> TELLZY 80 15 TABS</option>
                              
                              <option value="40009667"> TELLZY 80 AM 15 TAB</option>
                              
                              <option value="40011436"> TELLZY 80 MG 15 TABS</option>
                              
                              <option value="50001879"> TELLZY ACH 40/5/12.5  10 TABS</option>
                              
                              <option value="50001878"> TELLZY ACH 40/5/6.25 10 TABS</option>
                              
                              <option value="50001881"> TELLZY ACH 80/5/12.5 10 TABS</option>
                              
                              <option value="50001880"> TELLZY ACH 80/5/6.25 10 TABS</option>
                              
                              <option value="50001884"> TELLZY AM 15 TABS</option>
                              
                              <option value="50001591"> TELLZY AM 15 TABS</option>
                              
                              <option value="40006535"> TELLZY AM 15 TABS</option>
                              
                              <option value="50001889"> TELLZY CH 40 MG 15 TAB</option>
                              
                              <option value="40009202"> TELLZY CH 40 MG 15 TAB</option>
                              
                              <option value="40009223"> TELLZY CH 6.25 MG 15 TAB</option>
                              
                              <option value="40009203"> TELLZY CH 80 MG 15 TAB</option>
                              
                              <option value="40012773"> TELLZY RS 15 TAB</option>
                              
                              <option value="40009682"> TELLZY RS 15 TAB</option>
                              
                              <option value="50000755"> TELLZY-AH 10 TABLETS</option>
                              
                              <option value="40000604"> TELLZY-H 10 TABS</option>
                              
                              <option value="50000732"> TELLZY-MT 25 10 TAB</option>
                              
                              <option value="40009184"> TELLZY-MT 25 10 TAB</option>
                              
                              <option value="50002018"> TELLZY-MT 25 15 TAB</option>
                              
                              <option value="40010746"> TELLZY-MT 25 MG 15 TAB</option>
                              
                              <option value="50000733"> TELLZY-MT 50 10 TAB</option>
                              
                              <option value="40009185"> TELLZY-MT 50 10 TAB</option>
                              
                              <option value="40010747"> TELLZY-MT 50 MG 15 TAB</option>
                              
                              <option value="50001892"> TELLZY-MT 50 MG 15 TAB</option>
                              
                              <option value="40005840"> Tellzy 40 15Tab</option>
                              
                              <option value="40005842"> Tellzy 80 15Tab</option>
                              
                              <option value="50000861"> Tellzy 80 AM 10 s</option>
                              
                              <option value="40004562"> Tellzy 80 H 10tab</option>
                              
                              <option value="50000864"> Tellzy CH 40 10 s</option>
                              
                              <option value="50001270"> Tellzy CH 6.25</option>
                              
                              <option value="50000865"> Tellzy CH 80 10 S</option>
                              
                              <option value="50000806"> Tellzy RS 10 tab</option>
                              
                              <option value="50002145"> VOAGE - M 10/1000</option>
                              
                              <option value="50002143"> VOAGE - M 10/500</option>
                              
                              <option value="50002146"> VOAGE - M 5/1000</option>
                              
                              <option value="50002233"> VOAGE MS 1000</option>
                              
                              <option value="50002232"> VOAGE MS 500</option>
                              
                              <option value="50002223"> VOAGE- S 15 TAB</option>
                              
                            </select>
            </div>


            <div className="addProductItem">
              <label> TARGET BRAND</label>
              <select name="brand" id="brand">
                              <option value="40012066"> ATECARD -D (N) 15 TABS</option>
                              
                              <option value="40000575"> ATECARD 25 14 TABS</option>
                              
                              <option value="40007048"> ATECARD 25 MG 14 TABS</option>
                              
                              <option value="40000576"> ATECARD 50 14 TABS</option>
                              
                              <option value="40009523"> ATECARD 50 MG 14 TABS</option>
                              
                              <option value="40000581"> ATECARD AM 14 TABS</option>
                              
                              <option value="40012065"> ATECARD AM 15 TABS</option>
                              
                              <option value="40000580"> ATECARD D 14 TABS</option>
                              
                              <option value="40006004"> Atecard 50mg 14 Tabs</option>
                              
                              <option value="40009268"> Atecard 50mg 14 Tabs</option>
                              
                              <option value="50001768"> DUBATRAN 110 10 CAPS</option>
                              
                              <option value="50001769"> DUBATRAN 150 10 CAPS</option>
                              
                              <option value="50001767"> DUBATRAN 75 10 CAPS</option>
                              
                              <option value="50001388"> ETERNEX - T Tablets 10TABS</option>
                              
                              <option value="50001441"> ETERNEX M 1000 10 TABS</option>
                              
                              <option value="50001442"> ETERNEX M 500 10 TABS</option>
                              
                              <option value="40004057"> GLISEN 1 TAB 10 S</option>
                              
                              <option value="40007049"> GLISEN 2 10 TABS</option>
                              
                              <option value="40004058"> GLISEN 2 TAB 10 S</option>
                              
                              <option value="50000370"> GLISEN 2 TABLET 10 TAB</option>
                              
                              <option value="50001600"> GLISEN MF 1 MG 15 TABS</option>
                              
                              <option value="50001887"> GLISEN MF FORTE 2 15 TABS</option>
                              
                              <option value="50002012"> GLISEN PM -2 15 TABS</option>
                              
                              <option value="50001800"> GLISEN VM 1/0.3 MG 10 TABS</option>
                              
                              <option value="50001801"> GLISEN VM 2/0.3 MG 10 TABS</option>
                              
                              <option value="50001003"> GLISEN VM1 10 TABS</option>
                              
                              <option value="50001004"> GLISEN VM2 10 TABS</option>
                              
                              <option value="40005016"> Glisen MF 1 mg  10 Tab</option>
                              
                              <option value="40005017"> Glisen MF 2 mg  10 Tab</option>
                              
                              <option value="40005239"> Glisen MF Forte 1 10 Tab</option>
                              
                              <option value="40005240"> Glisen MF Forte 2 10 Tab</option>
                              
                              <option value="40005020"> Glisen PM 1 mg 10 tab</option>
                              
                              <option value="40005021"> Glisen PM 2 mg 10 tab</option>
                              
                              <option value="50001587"> KINPHOS 10 TABS</option>
                              
                              <option value="40000573"> METOFIX- XL 1000 10 S TAB</option>
                              
                              <option value="40009377"> METOFIX-XL 1000 (N) 10</option>
                              
                              <option value="40012903"> METOFIX-XL 1000 MG 15 TAB</option>
                              
                              <option value="40006005"> Metofix XL 500 10 S Tab</option>
                              
                              <option value="40009269"> Metofix XL 500 10 S Tab</option>
                              
                              <option value="40009369"> TELLZY 20 15 TABS</option>
                              
                              <option value="40011438"> TELLZY 20 MG 15 TABS</option>
                              
                              <option value="40009370"> TELLZY 40 15 TABS</option>
                              
                              <option value="40011437"> TELLZY 40 MG 15 TABS</option>
                              
                              <option value="40009371"> TELLZY 80 15 TABS</option>
                              
                              <option value="40009667"> TELLZY 80 AM 15 TAB</option>
                              
                              <option value="40011436"> TELLZY 80 MG 15 TABS</option>
                              
                              <option value="50001879"> TELLZY ACH 40/5/12.5  10 TABS</option>
                              
                              <option value="50001878"> TELLZY ACH 40/5/6.25 10 TABS</option>
                              
                              <option value="50001881"> TELLZY ACH 80/5/12.5 10 TABS</option>
                              
                              <option value="50001880"> TELLZY ACH 80/5/6.25 10 TABS</option>
                              
                              <option value="50001884"> TELLZY AM 15 TABS</option>
                              
                              <option value="50001591"> TELLZY AM 15 TABS</option>
                              
                              <option value="40006535"> TELLZY AM 15 TABS</option>
                              
                              <option value="50001889"> TELLZY CH 40 MG 15 TAB</option>
                              
                              <option value="40009202"> TELLZY CH 40 MG 15 TAB</option>
                              
                              <option value="40009223"> TELLZY CH 6.25 MG 15 TAB</option>
                              
                              <option value="40009203"> TELLZY CH 80 MG 15 TAB</option>
                              
                              <option value="40012773"> TELLZY RS 15 TAB</option>
                              
                              <option value="40009682"> TELLZY RS 15 TAB</option>
                              
                              <option value="50000755"> TELLZY-AH 10 TABLETS</option>
                              
                              <option value="40000604"> TELLZY-H 10 TABS</option>
                              
                              <option value="50000732"> TELLZY-MT 25 10 TAB</option>
                              
                              <option value="40009184"> TELLZY-MT 25 10 TAB</option>
                              
                              <option value="50002018"> TELLZY-MT 25 15 TAB</option>
                              
                              <option value="40010746"> TELLZY-MT 25 MG 15 TAB</option>
                              
                              <option value="50000733"> TELLZY-MT 50 10 TAB</option>
                              
                              <option value="40009185"> TELLZY-MT 50 10 TAB</option>
                              
                              <option value="40010747"> TELLZY-MT 50 MG 15 TAB</option>
                              
                              <option value="50001892"> TELLZY-MT 50 MG 15 TAB</option>
                              
                              <option value="40005840"> Tellzy 40 15Tab</option>
                              
                              <option value="40005842"> Tellzy 80 15Tab</option>
                              
                              <option value="50000861"> Tellzy 80 AM 10 s</option>
                              
                              <option value="40004562"> Tellzy 80 H 10tab</option>
                              
                              <option value="50000864"> Tellzy CH 40 10 s</option>
                              
                              <option value="50001270"> Tellzy CH 6.25</option>
                              
                              <option value="50000865"> Tellzy CH 80 10 S</option>
                              
                              <option value="50000806"> Tellzy RS 10 tab</option>
                              
                              <option value="50002145"> VOAGE - M 10/1000</option>
                              
                              <option value="50002143"> VOAGE - M 10/500</option>
                              
                              <option value="50002146"> VOAGE - M 5/1000</option>
                              
                              <option value="50002233"> VOAGE MS 1000</option>
                              
                              <option value="50002232"> VOAGE MS 500</option>
                              
                              <option value="50002223"> VOAGE- S 15 TAB</option>
                              
                            </select>
            </div>
          </div>

<br/><br/>
          <div className="column_of_three">
            <div className="addProductItem">
            <label> CURRENT SUPPORT</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            <div className="addProductItem">
            <label> ADDITIONAL SUPPORT	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
          </div>
            <div className="column_of_three">
              <div className="addProductItem">
              <label> SUPPORT TILL MONTH & YEAR	</label>
              <input type="text" placeholder="" onChange={handleCat}  />
              </div>
              <div className="addProductItem">
              <label>REMARKS FOR THE CUST.*</label>
              <input type="text" placeholder="" onChange={handleCat}  />
              </div>
            </div>

<br/><br/>
         <div className="column_of_three">
            <div className="addProductItem">
            <label>CATEGORY</label>
            <select name="brand" id="brand">
                              <option value="40012066"> CONFERENCES</option>
                              
                              <option value="40000575"> CONFERENCES2</option>
            </select>                            
            </div>
            <div className="addProductItem">
            <label>SELECT ITEM</label>
            <select name="brand" id="brand">
                              <option value="40012066"> ITEM 1</option>
                              
                              <option value="40000575"> ITEM 2</option>
            </select> 
            </div>
            <div className="addProductItem">
            <label>Is Government Doctor ?   </label>
            <select name="brand" id="brand">
                              <option value="40012066"> YES</option>
                              
                              <option value="40000575"> NO</option>
            </select> </div>
          </div>
          <div className="column_of_three">
            <div className="addProductItem">
            <label>	Is PSS Doctor ?  </label>
            <select name="brand" id="brand">
                              <option value="400005788"> YES</option>
                              <option value="40000575"> NO</option>
            </select>             </div>
            <div className="addProductItem">
            <label>	PSS LIMIT </label>
            <select name="brand" id="brand">
                              <option value="40012066"> 5% to 10%</option>
                              <option value="40000575"> 10% to 15%</option>
                              <option value="40000575"> 15% to 20%</option>
            </select> 
            </div>
            <div className="addProductItem">
            <label>Total</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
          </div>
<br/><br/>
            <div className="addProductItem">
            <div className="addProductItem" style={{width: "60vw"}}>
            <div >
            <div style={{display:"flex"}}>
                <input type="radio" name="rtype" value="1" checked/>
                <label>Registration</label>  {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                <input type="text" placeholder="" onChange={handleCat}  />
            </div><br/>
            <div style={{display:"flex"}}><input type="radio" name="rtype" value="1"/>
                <label>Car </label> {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} {'\u00A0'}
                <input type="text" placeholder="" onChange={handleCat}  />
            </div><br/>
            <div style={{display:"flex"}}><input type="radio" name="rtype" value="1"/>
                <label>Hotel </label> {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                <input type="text" placeholder="" onChange={handleCat}  />
            </div><br/>
            <div style={{display:"flex"}}><input type="radio" name="rtype" value="1"/>
                <label>Air Ticket </label> {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                <input type="text" placeholder="" onChange={handleCat}  />
            </div>
            </div>
            </div>
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
      </form>
    </div>
     </div>

    </div>
  )
}

export default InfoThree