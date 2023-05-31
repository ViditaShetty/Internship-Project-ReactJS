import { useState } from "react";
import "./newProduct.css";
/*import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "@firebase/storage";*/
//import app from "../../firebase";
import UserList from "./UserList";


export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [table,setTable]=useState(false);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
      setTable(true);
    });
  };
  const handleCat = (e) => {
  };

  const handleClick = (e) => {
    e.preventDefault();
    setTable(true);
  };

  return (
    <>
    <div className="newProduct">
      <h1 className="addProductTitle">Group Mss Proposal Modification</h1>
      <form className="addProductForm" style={{display:"block"}}>

        <div className="addProductItem">
          <label>Division</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">SUMMIT</option>
            <option value="false">SUMMIT 2</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">2021-2022</option>
            <option value="false">2022-2023</option>
            <option value="false">2023-2024</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Date</label>
          from<input type="text" placeholder="01/04/2023" onChange={handleCat} />
          to<input type="text" placeholder="31/03/2024" onChange={handleCat} />
        </div>

        <div className="addProductItem" style={{width: "60vw"}}>
        <label>Status</label>
        <div style={{display:"flex"}}>
          <div>
              <input type="radio" name="rtype" value="1" checked/>
              <label>Pending for your approval</label>  {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
          </div>
              <div><input type="radio" name="rtype" value="1"/>
              <label>Already approved/rejected </label> {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
          </div>
          <div>
              <input type="radio" name="rtype" value="1"/>
              <label> In process </label> {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
           </div>
           <div>
              <input type="radio" name="rtype" value="1"/>
              <label>All</label>
          </div>
        </div>
        </div>

          <button className="addProductButton">
                  <a href="#table" style={{color:"white"}} >    Search CRM to edit        </a>
         </button>
      </form>
    </div>


    <div id="table" className="newProduct" style={{minWidth:'80%',padding:"0%" , margin:"6% 2% 3% 15%"}}>
        <UserList/>
      </div>
  
  </>
  );
}
