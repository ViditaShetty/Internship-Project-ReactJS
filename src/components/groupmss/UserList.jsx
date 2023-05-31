import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import ExamplePdf from '../../assets/Alembic_Pharmaceuticals_Ltd_logo.png';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import React, {useRef} from 'react';



export default function UserList() {
  var [data, setData] = useState([]);
  useEffect(()=>{
    const getUsers=async()=>{
      console.log('get user command');
      }
      getUsers();
      setData(userRows);
         },[])

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const tableRef = useRef(null);
  const exportAsPdf=()=>{

  }
  
  const columns = [
    { field: "id", headerName: "S.No", width: 40 },
    {
      field: "Division",
      headerName: "Division",
      width: 200,
    },
    { field: "PROPOSAL_No", headerName: "PROPOSAL No.", width: 200 },
    {
      field: "Trip",
      headerName: "Trip Type",
      width: 120,
    },
    {
      field: "Budget",
      headerName: "Budget Type",
      width: 160,
    },
    { field: "Place", headerName: "Place", width: 200 },
    {
      field: "Event",
      headerName: "Event",
      width: 120,
    },
    {
      field: "Days",
      headerName: "Duration(in days)",
      width: 160,
    },
    {
      field: "participants",
      headerName: "No. of participants",
      width: 120,
    },
    {
      field: "action2",
      headerName: "Repeated Doctors",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/modify" + params.row.id}>
              <button className="userListEdit">View</button>
            </Link>
          </>
        );
      },
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 160,
    },
    
    {
      field: "action",
      headerName: "History",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/modify/" + params.row.id}>
              <button className="userListEdit">View</button>
            </Link>
          </>
        );
      },
    },
    {
      field: "action3",
      headerName: "Status",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/modify"}>
              <button className="userListEdit">Modify</button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="userList" style={{paddingTop:"3%"}}>
      <div className="Title"> 
         List of MSS Proposals{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
         <input type='text' style={{padding:"10px",borderRadius:"70px",border:"0.9px solid black"}}/> 
         {'\u00A0'} <i className="icon-magnifier"></i>
       </div>
      
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        ref={tableRef}
      />
         
    <DownloadTableExcel
              filename="users table"
              sheet="users"
              currentTableRef={tableRef.current}
          >
      <button className="addProductButton" style={{margin:"2% auto" , display:"flex"}}>
                 Download as Excel{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} 
                 <i className="icon-cloud-download"></i>    
      </button> 
     </DownloadTableExcel>                   
    </div>
  );
}
