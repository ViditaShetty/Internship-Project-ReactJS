import React from 'react';
import './payment.css';
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
    {/*<!--===============================PART 2 ======================--!> */}
    

     <div className='general' style={{maxWidth:"70vw"}} id="payment">
      <i className="icon-grid"></i>
       {'\u00A0'}{'\u00A0'}PAYMENT DETAIL (to be filled by marketing services department)
        <div className="userShow ">
         <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
            ref={tableRef}
         />
         <br/>
         <button className="addProductButton" style={{display:'block'}} onClick={handleOpen}>
            {'\u00A0'}{'\u00A0'} <a href="#payment" style={{color:"white"}} > Add record {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}<i className='icon-plus'></i>    </a>{'\u00A0'}{'\u00A0'}
         </button>
         <br/>
         <button className="addProductButton" style={{display:'block'}}>
            {'\u00A0'}{'\u00A0'} <a href="#payment" style={{color:"white"}} > Next {'\u00A0'}{'\u00A0'} <i className='icon-arrow-down'></i>    </a>{'\u00A0'}{'\u00A0'}
         </button>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={{position: 'absolute', top: '50%',left: '50%',transform: 'translate(-50%, -50%)',width: 400,bgcolor: 'background.paper',border: '1px solid darkblue',boxShadow: 24,p: 4,}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Record
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <form className="addProductForm">
                <div className="column_one">
                    <div className="addProductItem">
                    <label>MODE OF PAYMENT</label>
                    <input type="text" placeholder="" onChange={handleCat} />
                    </div>
                    <div className="addProductItem">
                    <label>AMOUNT</label>
                    <input type="text" placeholder="" onChange={handleCat} />
                    </div>
                    <div className="addProductItem">
                    <label>DD/CHQ IN FAVOUR OF</label>
                    <input type="text" placeholder="" onChange={handleCat} />
                    </div>
                    <div className="addProductItem">
                    <label>ADVANCE REQUIREMENT</label>
                    <input type="text" placeholder="" onChange={handleCat} />
                    </div>
                    <div className="addProductItem">
                    <label>TILL DATE(dd/mm/yyyy)</label>
                    <input type="text" placeholder="" onChange={handleCat} />
                    </div>
                    <div className="addProductItem">
                    <label>CHEQUE NO.</label>
                    <input type="text" placeholder="" onChange={handleCat} />
                    </div>
                    <div className="addProductItem">
                    <label>REMARKS</label>
                    <input type="text" placeholder="" onChange={handleCat} />
                    </div>
                    <br/>
                    <button className="addProductButton" style={{display:'block'}}>
                        {'\u00A0'}{'\u00A0'} <a href="#supporting" style={{color:"white"}} > Add Entry {'\u00A0'}{'\u00A0'}    </a>{'\u00A0'}{'\u00A0'}
                    </button>
                </div>
            </form>
          </Typography>
        </Box>
      </Modal>
        </div>
     </div>


         {/*<!--===============================PART 3 ======================--!> */}

     <div className='general' style={{maxWidth:"70vw"}} id="supporting">
      <i className="icon-grid"></i>
       {'\u00A0'}{'\u00A0'}SUPPORTING DOCUMENTS

       <div className="userShow ">
        <form className="addProductForm">

        <div className="column_one">
            <div className="addProductItem">
            <label>LIST OF ATTACHED DOCUMENTS</label>
            <input type="text" placeholder="" onChange={handleCat} /><br/>
            <input type="text" placeholder="" onChange={handleCat} /><br/>
            <input type="text" placeholder="" onChange={handleCat} /><br/>
            </div>
           
        </div>
        <div className="column_two">
             <div className="addProductItem">
            <label>LIST OF PENDING DOCUMENTS</label>
            <input type="text" placeholder="" onChange={handleCat} /><br/>
            <input type="text" placeholder="" onChange={handleCat} /><br/>
            <input type="text" placeholder="" onChange={handleCat} /><br/>
            </div>
        </div>
        </form>
        <button className="addProductButton" style={{display:'block'}}>
                        {'\u00A0'}{'\u00A0'} <a href="#supporting" style={{color:"white"}} > Update {'\u00A0'}{'\u00A0'}    </a>{'\u00A0'}{'\u00A0'}
        </button>
        
         <button className="addProductButton" style={{display:'block'}}>
            {'\u00A0'}{'\u00A0'} <a href="#payment" style={{color:"white"}} > Next {'\u00A0'}{'\u00A0'} <i className='icon-arrow-down'></i>    </a>{'\u00A0'}{'\u00A0'}
         </button>
        </div>
     </div>
     
              {/*<!--===============================PART 4 ======================--!> */}
    <div className='general' style={{maxWidth:"100vw"}}>
    <i className="icon-grid"></i>
       {'\u00A0'}{'\u00A0'}REMARKS

       <div className="userShow ">
        <form className="addProductForm">

        <div className="column_one">
            <div className="addProductItem">
            <label>REMARKS</label>
            <input type="text" placeholder="" onChange={handleCat} style={{width:"100%",minHeight:"100px"}}/><br/>
            </div> 
            <button className="addProductButton" style={{display:'block'}}>
                        {'\u00A0'}{'\u00A0'} <a href="#supporting" style={{color:"white"}} > Modify {'\u00A0'}{'\u00A0'}    </a>{'\u00A0'}{'\u00A0'}
            </button>  
        </div>
        </form>
        </div>
    </div>

    </div>
  )
}

export default InfoOne