import React from 'react';
import './infoone.css';
import InfoTwo from './InfoTwo';
import InfoThree from './InfoThree';

const InfoOne = () => {  
    const handleCat = (e) => {
    };

  
  return (
    <div  style={{overflowX:"hidden"}}>

    {/*<!--===============================PART 1 ======================--!> */}

     <div className='general' style={{maxWidth:"70vw"}}>
      <i className="icon-grid"></i>
       {'\u00A0'}{'\u00A0'}Customer Information -1
        <div className="userShow ">
        <form className="addProductForm">

        <div className="column_one">
            <div className="addProductItem">
            <label>QUALIFICATION</label>
            <input type="text" placeholder="" onChange={handleCat} />
            </div>
            <div className="addProductItem">
            <label>HQ</label>
            <input type="text" placeholder="" onChange={handleCat} />
            </div>
            <div className="addProductItem">
            <label>CONTACT NO.</label>
            <input type="text" placeholder="" onChange={handleCat} />
            </div>
            <div className="addProductItem">
            <label>PCODE</label>
            <input type="text" placeholder="" onChange={handleCat} />
            </div>
            <div className="addProductItem">
            <label>REGION</label>
            <input type="text" placeholder="" onChange={handleCat} />
            </div>
            <div className="addProductItem">
            <label>ADDRESS</label>
            <input type="text" placeholder="" onChange={handleCat} />
            </div>
            <div className="addProductItem">
            <label>	TILL DATE TOTAL NO. OF MSS</label>
            <input type="text" placeholder="" onChange={handleCat} />
            </div>
        </div>
        <div className="column_two">
            <div className="addProductItem" style={{width: "60vw"}}>
            <label>Customer's Family Details (If Company is Sponsoring)</label>
            <div style={{display:"flex"}}>
            <div>
                <input type="radio" name="rtype" value="1" checked/>
                <label>Yes</label>  {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
            </div>
                <div><input type="radio" name="rtype" value="1"/>
                <label>No </label> {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
            </div>
            </div>
            </div>
            
            <div className="addProductItem">
            <label>Members Name</label>
            <div style={{display:'flex',marginBottom:"12px"}}>{'\u00A0'} 1{'\u00A0'}{'\u00A0'} <input type="text" placeholder="" onChange={handleCat} /> </div>
            <div style={{display:'flex',marginBottom:"12px"}}>{'\u00A0'} 2{'\u00A0'}{'\u00A0'} <input type="text" placeholder="" onChange={handleCat} /> </div>
            <div style={{display:'flex',marginBottom:"12px"}}>{'\u00A0'} 3{'\u00A0'}{'\u00A0'}<input type="text" placeholder="" onChange={handleCat} /> </div>
            <div style={{display:'flex',marginBottom:"12px"}}>{'\u00A0'} 4{'\u00A0'}{'\u00A0'} <input type="text" placeholder="" onChange={handleCat} /> </div>
            </div>
            
            <div className="addProductItem">
            <label>Actions</label>
            <button className="addProductButton" style={{display:'block'}}>
            {'\u00A0'}{'\u00A0'} <a href="#" style={{color:"white"}} >   View Groups       </a>{'\u00A0'}{'\u00A0'}
            </button>
            <button className="addProductButton" style={{display:'block'}}>
            {'\u00A0'}{'\u00A0'} <a href="#" style={{color:"white"}} >   View or Delete Current List       </a>{'\u00A0'}{'\u00A0'}
            </button><br/><br/>
            <button className="addProductButton" style={{display:'block'}}>
            {'\u00A0'}{'\u00A0'} <a href="#partTwo" style={{color:"white"}} > Next  <i className='icon-arrow-down'></i>    </a>{'\u00A0'}{'\u00A0'}
            </button>
            </div>

        </div>
      </form>
    </div>
     </div>

      {/*<!--===============================PART 3 ======================--!> */}
        <InfoTwo/>


      {/*<!--===============================PART 3 ======================--!> */}

      <InfoThree/>

    </div>
  )
}

export default InfoOne