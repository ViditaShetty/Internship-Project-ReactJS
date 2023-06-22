import { useState } from "react";
import "./mssnewProduct.css";
/*import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "@firebase/storage";*/
//import app from "../../firebase";
import MssInfoOne from "./MssInfoOne";

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import loadingGIF from '../../assets/loading (2).gif';
import { useNavigate } from "react-router-dom";


export default function MssNewProduct() {
  const [inputs, setInputs] = useState({});
  const [table,setTable]=useState(false);
  const [loading,setLoading]=useState(false);
  const [clicked,setClicked]=useState(false);
  const navigate=useNavigate();


  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
      setTable(true);
      
    });
  };
  const handleCat = (e) => {
    e.preventDefault();
  };

  const handleLoading = async(e) => {
    setLoading(true);
    await setTimeout(()=>{setLoading(false);setClicked(true);navigate("/mssinfoOne");},2000);
    window.scrollTo(1000,0);
    
  };

  return (
    <>
   <LocalizationProvider dateAdapter={AdapterDayjs}>
    <div className="newProduct" style={{  margin:"3% 17%"}}>
      <h1 className="addProductTitle">MSS Proposal Entry</h1>
      <form className="addProductForm" style={{display:"block"}} onSubmit={handleCat}>
      <div style={{display:"flex"}}>
       <div className="column_one">
        <div className="addProductItem">
          <label>Division</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">SUMMIT</option>
            <option value="false">SUMMIT 2</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>RM Name</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Sutanu Dutta</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Type</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Zonal MSS</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">2023-2024</option>
            <option value="false">2024-2025</option>
          </select>
        </div>
      </div>

      <div className="column_two">
        <div className="addProductItem">
          <label>Date</label>
          <DatePicker  />       
        </div>
        <div className="addProductItem">
          <label>Division Code</label>
          <input type="text" placeholder="01/04/2023" onChange={handleCat} />
        </div>
        <div className="addProductItem">
          <label>RM Emp. Code    </label>
          <input type="text" placeholder="01/04/2023" onChange={handleCat} />
        </div>
      </div>
      </div>
      <br/>
      {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
      {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
      {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
        <button className="addProductButton" 
        style={{width:"40vw",padding:"2% 0%",boxShadow:"5px 5px 10px grey",color:"white"}} onClick={handleLoading}>
                LOAD MSS PROPOSAL FORM   
        </button>
      </form>
    </div>

    {loading && (
        <div style={{marginTop:"-2vw",marginLeft:"39vw"}}>
        <div style={{color:"rgb(138, 133, 133);"}}>Loading <br/></div>   
        <img src={loadingGIF} style={{height:"7vh",marginLeft:"0vw",marginTop:"0%"}} id="table"></img>
        <div style={{color:"rgb(138, 133, 133);"}}> Please wait <br/></div>   

        </div>
        )}
   
    {(!loading && clicked) &&(
      <div id="table" className="" style={{minWidth:'80%',padding:"0%" , margin:"-2% 2% 3% 5%"}}>
        <MssInfoOne/>
      </div>
      )}
  </LocalizationProvider>
  </>
  );
}
