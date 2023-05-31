import React from 'react'
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";
  import "./general.css";
import PanAvatar from '../../assets/pan_avatar.jpg';


const General = () => {
  return (
    <>

        {/*<!--===============================PART 1 ======================--!> */}

    <div className='general'>
       <i className="icon-grid"></i>
       {'\u00A0'}{'\u00A0'}MSS Info
        <div className="userShow ">
          <div className="userShowBottom">
            <div className="column_one">
                    <span className="userShowTitle">Divison</span>
                    <div className="userShowInfo">
                    <PermIdentity className="userShowIcon" />
                    <span className="userShowInfoTitle">Summit</span>
                    </div>
                    <span className="userShowTitle">Trip Type</span>
                    <div className="userShowInfo">
                    <CalendarToday className="userShowIcon" />
                    <span className="userShowInfoTitle">Domestic</span>
                    </div>
                    <span className="userShowTitle">Place</span>
                    <div className="userShowInfo">
                    <PhoneAndroid className="userShowIcon" />
                    <span className="userShowInfoTitle">India</span>
                    </div>
            </div>

            <div className="column_two">
                    <span className="userShowTitle">No. of participants</span>
                    <div className="userShowInfo">
                    <LocationSearching className="userShowIcon" />
                    <span className="userShowInfoTitle">500</span>
                    </div>
                    <span className="userShowTitle">Name of the event</span>
                    <div className="userShowInfo">
                    <LocationSearching className="userShowIcon" />
                    <span className="userShowInfoTitle">Conference</span>
                    </div>
                    <span className="userShowTitle">Duration (in days)</span>
                    <div className="userShowInfo">
                    <MailOutline className="userShowIcon" />
                    <span className="userShowInfoTitle">365</span>
                    </div>
            </div>

            <div className="column_three">
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

    <div className="general">
    <i className="icon-grid"></i>
       {'\u00A0'}{'\u00A0'}CUSTOMER DETAIL 
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>RM Name</label>
                <input
                  type="text"
                  placeholder="Suntanu Dutta"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Mr Name</label>
                <input
                  type="text"
                  placeholder="Suntanu Dutta"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Customer Name</label>
                <input
                  type="text"
                  placeholder="annabeck"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>PAN Card Number</label>
                <input
                  type="text"
                  placeholder="0123456789"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
                <label>Pan Image (In .JPG/.JPEG/.PNG Format Only)</label>
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
              <button className="userUpdateButton">Upload Pan Image</button>
            </div>
          </form>
        </div>
    </div>
    </>
  )
}

export default General