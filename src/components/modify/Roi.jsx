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
        { field: "jan", headerName: "JAN", width: 200 },
        { field: "feb",headerName: "FEB",width: 200,},
        { field: "mar", headerName: "MAR", width: 200 },
        { field: "apr", headerName: "APRIL", width: 200 },
        {field: "may", headerName: "MAY",width: 200, },
        {field: "jun", headerName: "JUNE",width: 160,},
        {field: "jul", headerName: "JUL",width: 200,},
        {field: "aug", headerName: "AUG",width: 200,},
        {field: "sep", headerName: "SEP",width: 200,},
        {field: "oct", headerName: "OCT",width: 200,},
        {field: "nov", headerName: "NOV",width: 200,},
        {field: "dec", headerName: "DEC",width: 200,},
        {field: "action2", headerName: "Actions",width: 200,
          renderCell: (params) => {
            return (<>
                <Link to={"/modify" + params.row.id}>
                  <button className="userListEdit">Delete</button>
                </Link></>);},},];

    const data=[{
            id:"1",
            jan:"Ajmer",
            feb:"Bihar",
            mar: "Chennai",
            apr: "Delhi",
            may: "Ajmer",
            jun: "Chennai",
            jul: "Bihar",
            aug:"Delhi" ,
            sep:"Bihar",
            oct: "Ajmer",
            nov: "Delhi",
            dec: "Chennai",
            },]

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
      
  
  return (
    <div  style={{overflowX:"hidden"}}>
    {/*<!--===============================PART 1 ======================--!> */}
    

     <div className='general' style={{maxWidth:"70vw"}} id="payment">
      <i className="icon-grid"></i>
       {'\u00A0'}{'\u00A0'}ROI TRACKING
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
        <Box sx={{position: 'absolute', top: '50%',left: '50%',transform: 'translate(-50%, -50%)',width:800,bgcolor: 'background.paper',border: '1px solid darkblue',boxShadow: 24,p: 4,}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Record
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <form className="addProductForm" style={{display:"flex"}}>
                <div className="column_one">
                    <div className="addProductItem" >
                    <label>JAN ROI</label>
                    <input type="text" placeholder="" onChange={handleCat} />
                    </div>
                    <div className="addProductItem">
                    <label>FEB ROI</label>
                    <input type="text" placeholder="" onChange={handleCat} />
                    </div>
                    <div className="addProductItem">
                    <label>MARCH ROI</label>
                    <input type="text" placeholder="" onChange={handleCat} />
                    </div>
                    <div className="addProductItem">
                    <label>APRIL ROI</label>
                    <input type="text" placeholder="" onChange={handleCat} />
                    </div>
                    <div className="addProductItem">
                    <label>MAY ROI</label>
                    <input type="text" placeholder="" onChange={handleCat} />
                    </div>
                    <div className="addProductItem">
                     <label>JUNE ROI</label>
                    <input type="text" placeholder="" onChange={handleCat} />
                    </div>
                </div>

                <div className='column_two'>
                    <div className="addProductItem">
                    <label>JULY ROI</label>
                    <input type="text" placeholder="" onChange={handleCat} />
                    </div>
                    <div className="addProductItem">
                    <label>AUG ROI</label>
                    <input type="text" placeholder="" onChange={handleCat} />
                    </div>
                    <div className="addProductItem">
                    <label>SEPTEMBER ROI</label>
                    <input type="text" placeholder="" onChange={handleCat} />
                    </div>
                    <div className="addProductItem">
                    <label>OCT ROI</label>
                    <input type="text" placeholder="" onChange={handleCat} />
                    </div>
                    <div className="addProductItem">
                    <label>NOVEMBER ROI</label>
                    <input type="text" placeholder="" onChange={handleCat} />
                    </div>
                    <div className="addProductItem">
                    <label>DECEMBER ROI</label>
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