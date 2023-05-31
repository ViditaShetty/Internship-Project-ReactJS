import React from 'react';
import './infoone.css';
import { useState,useRef } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



const InfoOne = () => {  
    const handleCat = (e) => {
    };
  
    const tableRef = useRef(null);
    const columns = [
        { field: "id", headerName: "id", width: 20 },
        { field: "pay", headerName: "MODE OF PAYMENT", width: 200 },
        { field: "amt",headerName: "AMOUNT",width: 200,},
        { field: "chq", headerName: "DD/CHQ IN FAVOUR OF", width: 200 },
        { field: "require", headerName: "ADVANCE REQUIREMENT", width: 200 },
        {field: "date", headerName: "TILL DATE (dd/mm/yyyy)",width: 200, },
        {field: "chqNo", headerName: "CHEQUE NO.",width: 160,},
        {field: "remark", headerName: "REMARKS",width: 200,},
        {field: "action2", headerName: "Actions",width: 200,
          renderCell: (params) => {
            return (<>
                <Link to={"/modify" + params.row.id}>
                  <button className="userListEdit">Delete</button>
                </Link></>);},},];

    const data=[{
            id:1,
            pay: "Cheque",
            amt: "10,000",
            chq: "alembic pharma",
            require: "None",
            date: "	12/05/23",
            chqNo: "1230007",
            remark:"None" },]

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
      
  
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
            </button><br/><br/><br/>
            <button className="addProductButton" style={{display:'block'}}>
            {'\u00A0'}{'\u00A0'} <a href="#partTwo" style={{color:"white"}} > Next  <i className='icon-arrow-down'></i>    </a>{'\u00A0'}{'\u00A0'}
            </button>
            </div>

        </div>
      </form>
    </div>
     </div>

      {/*<!--===============================PART 2 ======================--!> */}

      <div className='general' style={{maxWidth:"70vw"}} id="partTwo">
      <i className="icon-grid"></i>
       {'\u00A0'}{'\u00A0'}Customer Information -2
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
            </button><br/><br/><br/>
            <button className="addProductButton" style={{display:'block'}}>
            {'\u00A0'}{'\u00A0'} <a href="#partThree" style={{color:"white"}} > Next  <i className='icon-arrow-down'></i>    </a>{'\u00A0'}{'\u00A0'}
            </button>
            </div>

        </div>
      </form>
    </div>
     </div>



      {/*<!--===============================PART 3 ======================--!> */}

      <div className='general' style={{maxWidth:"70vw"}} id="partThree">
      <i className="icon-grid"></i>
       {'\u00A0'}{'\u00A0'}Customer Information -3
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
            </button><br/><br/><br/>
            </div>

        </div>
      </form>
    </div>
     </div>

    </div>
  )
}

export default InfoOne