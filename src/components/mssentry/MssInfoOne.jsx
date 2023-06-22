import React, { useEffect } from 'react';
import './mssinfoone.css';
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import PanAvatar from '../../assets/pan_avatar.jpg';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Sidebar from '../sidebar/Sidebar';
import { useState } from 'react';


const MssInfoOne = () => {  
    const handleCat = (e) => {
    };

    const[msgerror,setMsgerror]=useState("");
    const[msgerror2,setMsgerror2]=useState("");
    const[msgerror3,setMsgerror3]=useState("");
    const[msgerror4,setMsgerror4]=useState("");
    const[msgerror5,setMsgerror5]=useState("");
    const[msgerror6,setMsgerror6]=useState("");
    const[msgerror7,setMsgerror7]=useState("");
    const[msgerror8,setMsgerror8]=useState("");
    const[msgerror9,setMsgerror9]=useState("");
 
    const handleSubmission = (event) => {
      event.preventDefault();
      if(event.target.brand[0].value==="40012066"){
         setMsgerror("Please fill out valid MR Name.(Section I)");
      }
      else{
        setMsgerror("");
      }
      if(event.target.DrName.value===""){
        setMsgerror2(" Please fill out valid DOCTOR Name.(Section II) ");
     }
     else{
      setMsgerror2("")
     }
     event.target.RegNo.value===""? setMsgerror3("Please fill Dr Registration number.(Section II)"): setMsgerror3("");
     event.target.panNo.value===""? setMsgerror4("Please fill PanCard No.(Section IV)"): setMsgerror4("");
     event.target.mobile.value===""? setMsgerror5("Please fill Mobile No.(Section II)"): setMsgerror5("");
     event.target.Purpose.value==="0"? setMsgerror6("Please select Purpose of CRM.(Section III)"): setMsgerror6("");
     event.target.SubCategory.value==="0"? setMsgerror7("Please select SubCategory.(Section III)"): setMsgerror7("");
     event.target.Focus.value==="0"? setMsgerror8("Please select Focus Brand.(Section III)"): setMsgerror8("");
     event.target.GovDoc.value==="0"? setMsgerror9("Please select Is Government Doctor.(Section III)"): setMsgerror9("");

     console.log(event.target.Purpose.value,"=======purposeee");

    };

    
    var selected=0;

    const handleSection=(e)=>{
      const coll = document.getElementsByClassName("collapsible");
      coll[selected].classList.toggle("active");
      const content=coll[selected].nextElementSibling;
      // <!--=== if you "manually" add a class in a react component (meaning that this class gets added to the DOM without any representation in the state) ======---!>
      // <!--===  some virtual DOM reconciliations might end up removing it =====--!>
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
          } 
    }
   
   

  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <div  style={{overflowX:"hidden"}}>
    {/*<!--===============================PART 1 ======================--!> */}
    <Sidebar/>
    <div className='general'>
       <i className="icon-grid"></i>
       {'\u00A0'}{'\u00A0'}General Info
        <div className="userShow ">
          <div className="userShowBottom">
            <div className="column_one" style={{marginRight:"10%",marginTop:"-3%"}}>
                    <span className="userShowTitle">Division</span>
                    <div className="userShowInfo">
                    <PermIdentity className="userShowIcon" />
                    <span className="userShowInfoTitle">SUMMIT</span>
                    </div>
                    <span className="userShowTitle">RM Name</span>
                    <div className="userShowInfo">
                    <CalendarToday className="userShowIcon" />
                    <span className="userShowInfoTitle">SUTANU DUTTA - BERHAMPORE (WB)</span>
                    </div>
                    <span className="userShowTitle">Type</span>
                    <div className="userShowInfo">
                    <PhoneAndroid className="userShowIcon" />
                    <span className="userShowInfoTitle">Zonal MSS </span>
                    </div>
            </div>

            <div className="column_two" style={{marginRight:"10%",marginTop:"-3%"}}>
                    <span className="userShowTitle">Year</span>
                    <div className="userShowInfo">
                    <LocationSearching className="userShowIcon" />
                    <span className="userShowInfoTitle">   2023 -- 2024</span>
                    </div>
                    <span className="userShowTitle">MSS Date</span>
                    <div className="userShowInfo">
                    <LocationSearching className="userShowIcon" />
                    <span className="userShowInfoTitle">02/06/2023</span>
                    </div>
                    <span className="userShowTitle">RM Emp. Code</span>
                    <div className="userShowInfo">
                    <MailOutline className="userShowIcon" />
                    <span className="userShowInfoTitle"> </span>
                    </div>
            </div>

            <div className="column_three" style={{marginRight:"10%",marginTop:"-3%"}}>
                    <span className="userShowTitle">Date</span>
                    <div className="userShowInfo">
                    <MailOutline className="userShowIcon" />
                    <span className="userShowInfoTitle">11.05.2023</span>
                    </div>
                    <span className="userShowTitle">Remaining budget</span>
                    <div className="userShowInfo">
                    <LocationSearching className="userShowIcon" />
                    <span className="userShowInfoTitle">-160000.0</span>
                    </div>
            </div>

          </div>
        </div>
    </div>


    {/*<!--===============================PART 2 ======================--!> */}
    <div className='general'>
       <i className="icon-grid"></i>
       {'\u00A0'}{'\u00A0'}Proposal Form
    <div className="userShow ">
        <form className="addProductForm3" onSubmit={handleSubmission}>
          <button  type="button" className="collapsible" onClick={e=>{selected=0;handleSection()}}>Section I</button>
          <div className="content">
          <div className="column_of_three">
            <div className="addProductItem">
              <label> MR Name</label>
              <select name="brand" id="brand">
                              <option value="40012066" defaultValue={""} >Select MR</option>
                              <option value="40000575"> Akshadeep Dutta ~ 710700 - MALDA -1</option>
                              <option value="40000576"> Akshadeep Dutta ~ 710700 - MALDA -1</option>
                              <option value="40000577"> Akshadeep Dutta ~ 710700 - MALDA -1</option>
                              <option value="40000578"> Akshadeep Dutta ~ 710700 - MALDA -1</option>
                              <option value="40000579"> Akshadeep Dutta ~ 710700 - MALDA -1</option>
                            </select>
            </div>

            <div className="addProductItem">
            <label> EMP CODE </label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
          </div>
          <div className="column_of_three">
            <div className="addProductItem">
            <label>Territory</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>

            <div className="addProductItem">
            <label>CUSTOMER CODE</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            <span>You can add a new customer. Option is available in the main menu.</span>
            </div>
          </div>
        </div>



          <button type="button" className="collapsible"onClick={e=>{ selected=1;handleSection()}}>Section II</button>
          <div className="content">
          <div className="column_of_three">
            <div className="addProductItem">
            <label> Customer Name</label>
            <input type="text" placeholder="" onChange={handleCat} name="DrName" />
            </div>
            <div className="addProductItem">
            <label> Customer No.	</label>
            <input type="text" placeholder="" onChange={handleCat} />
            </div>
            <div className="addProductItem">
            <label> Specialty	</label>
            <input type="text" placeholder="" onChange={handleCat}  />
            </div>
          </div>
          <div className="column_of_three">
              <div className="addProductItem">
              <label> Qualification</label>
              <input type="text" placeholder="" onChange={handleCat}  />
              </div>
              <div className="addProductItem">
              <label>PCODE</label>
              <input type="text" placeholder="" onChange={handleCat}  />
              </div>
              <div className="addProductItem">
              <label>Sample</label>
              <input type="text" placeholder="" onChange={handleCat}  />
              </div>
          </div>
          <div className="column_of_three">
              <div className="addProductItem">
              <label> Address	</label>
              <input type="text" placeholder="" onChange={handleCat}  />
              </div>
              <div className="addProductItem">
              <label>Pincode</label>
              <input type="text" placeholder="" onChange={handleCat}  />
              </div>
              <div className="addProductItem">
              <label>City</label>
              <input type="text" placeholder="" onChange={handleCat}  />
              </div>
          </div>
          <div className="column_of_three">
              <div className="addProductItem">
                <label>*Mobile No.</label>
                <input type="text" placeholder="" onChange={handleCat}  name="mobile"/>
              </div>
              <div className="addProductItem">
                <label>Phone No.</label>
                <input type="text" placeholder="" onChange={handleCat}  />
              </div>
              <div className="addProductItem">
                <label>*Reg No.</label>
                <input type="text" placeholder="" onChange={handleCat}  name="RegNo"/>
              </div>
          </div>
          <div className="column_of_three">
              <div className="addProductItem">
              <label> DoB(DD/MM/YYYY)</label>
              <div style={{width:"74%"}}><DatePicker/></div>
              </div>

              <div className="addProductItem">
              <label style={{marginLeft:"-23%"}}> DoA(DD/MM/YYYY)</label>
              <div  style={{width:"74%",marginLeft:"-23%"}}><DatePicker /></div>
              </div>
          </div>
        </div>




         <button type="button" className="collapsible" onClick={e=>{selected=2 ;handleSection()}}> Section III</button>
         <div className="content">
         <div className="column_of_three">
            <div className="addProductItem">
            <label>Is Government Doctor ?   </label>
            <select id="brand"  name="GovDoc">
                          <option value="0">SELECT DOCTOR TYPE</option>
                          <option value="40012066"> YES</option>
                          <option value="40000575"> NO</option>
            </select> </div>
             <div className="addProductItem">
            <label>	Is PSS Doctor ?  </label>
            <select name="brand" id="brand">
                              <option value="0">SELECT PSS DOCTOR</option>
                              <option value="400005788"> YES</option>
                              <option value="40000575"> NO</option>
            </select>             </div>
            <div className="addProductItem">
            <label>	PSS LIMIT </label>
            <select name="brand" id="brand">
                              <option value="0">SELECT PSS LIMIT</option>
                              <option value="40012066"> 5% to 10%</option>
                              <option value="40000575"> 10% to 15%</option>
                              <option value="40000575"> 15% to 20%</option>
            </select> 
            </div>
          </div>
          <div className="column_of_three">
            <div className="addProductItem">
              <label>PURPOSE OF CRM</label>
              <select name="Purpose" id="brand">
                                <option value="0">SELECT PURPOSE </option>
                                <option value="40012066"> CAMP ACTIVITY PATIENT</option>
                                <option value="40000575"> CONFERENCE</option>
                                <option value="40000575"> DIGITAL ACTIVITY</option>
                                <option value="40000575"> CONFERENCE</option>
              </select>                            
              </div>
              <div className="addProductItem">
              <label>SUB CATEGORY</label>
              <select name="SubCategory" id="brand">
                                <option value="0">SELECT SUB-CATEGORY</option>
                                <option value="40012066"> ITEM 1</option>
                                <option value="40000575"> ITEM 2</option>
              </select> 
              </div>
            <div className="addProductItem">
            <label>	FOCUS BRAND </label>
            <select name="Focus" id="brand">
                              <option value="0">SELECT FOCUS BRAND</option>
                              <option value="40012066"> TELLZY</option>
                              <option value="40000575"> VOAGE</option>
            </select> 
            </div>
          </div>
        </div>



          <button type="button" className="collapsible" onClick={ e=>{selected=3;handleSection()}}> Section IV</button>
          <div className="content">
          <div >
                <div className="addProductItem" style={{width:"36%"}}>
                    <label>PAN Card Number</label>
                    <input
                      type="text"
                      placeholder="0123456789"
                      className="userUpdateInput"
                      name="panNo"
                    />
                </div>
                <br/>
                <div className="userUpdateRight">
                    <label style={{fontWeight:"700"}}>Pan Image (In .JPG/.JPEG/.PNG Format Only)</label>
                  <div className="userUpdateUpload">
                    <img
                      className="userUpdateImg"
                      src={PanAvatar}
                      alt=""
                    />
                    <label htmlFor="file">
                      <Publish className="userUpdateIcon" />Click to select file
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <br/>
                  <button className="userUpdateButton" style={{backgroundColor:"darkblue",color: "white",borderRadius:"10px",width:"30%"}}>Upload Pan Image</button>
                </div>
            </div>
        </div>
          
{'\u00A0'}{'\u00A0'} <button className="addProductButton" style={{display:'block',width:"90%",padding:"2% 3%",backgroundColor:"darkblue"}}>
          {'\u00A0'}{'\u00A0'} <span style={{color:"white"}} >  START MSS ENTRY </span>{'\u00A0'}{'\u00A0'}
          </button><br/>
          <div style={{ fontWeight: "600"}}>
            <div className='errorMsg'>{msgerror}</div>
            <div className='errorMsg'>{msgerror2}</div>
            <div className='errorMsg'>{msgerror3}</div>
            <div className='errorMsg'>{msgerror4}</div>
            <div className='errorMsg'>{msgerror5}</div>
            <div className='errorMsg'>{msgerror6}</div>
            <div className='errorMsg'>{msgerror7}</div>
            <div className='errorMsg'>{msgerror8}</div>
            <div className='errorMsg'>{msgerror9}</div>
          </div>
      </form>
    </div>
  </div>
    </div>
<br/>
    </LocalizationProvider>
  )
}

export default MssInfoOne