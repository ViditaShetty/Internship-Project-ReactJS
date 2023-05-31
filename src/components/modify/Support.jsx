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
        { field: "div", headerName: "DIVISION", width: 200 },
        { field: "prescribed",headerName: "PRESCRIBED BRAND",width: 200,},
        { field: "current", headerName: "CURRENT SUPPORT", width: 200 },
        {field: "action2", headerName: "Actions",width: 200,
          renderCell: (params) => {
            return (<>
                <Link to={"/modify" + params.row.id}>
                  <button className="userListEdit">Delete</button>
                </Link></>);},},];

    const data=[{
            id:1,
            div: "SUMMIT",
            prescribed: "ABC",
            current: "1100",},]

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
      
  
  return (
    <div  style={{overflowX:"hidden"}}>
    {/*<!--===============================PART 1 ======================--!> */}
    

     <div className='general' style={{maxWidth:"70vw"}} id="payment">
      <i className="icon-grid"></i>
       {'\u00A0'}{'\u00A0'}SUPPORT TO OTHER DIVISIONS
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
                    <label>DIVISION</label>
                    <input type="text" placeholder="" onChange={handleCat} />
                    </div>
                    <div className="addProductItem">
                    <label>PRESCRIBED BRAND</label>
                    <input type="text" placeholder="" onChange={handleCat} />
                    </div>
                    <div className="addProductItem">
                    <label>CURRENT SUPPORT</label>
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

    </div>
  )
}

export default InfoOne