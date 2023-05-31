import React from 'react'
import './about.css'
import { useNavigate } from 'react-router-dom';


const About = (props) => {
  const navigate=useNavigate();

  return (
    <section className="about container section" id='about'>
      <div className="about__container grid">
          <div className="about__data grid">
            <div className="about__skills grid">
              <div className="skills__data">
              {props.individualProp &&(
                <>
                <div className="skills__titles">
                  <h3 className="skills__name ">MSS - Entry</h3>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage percent1"></span>
                </div>

                <div className="skills__titles">
                  <h3 className="skills__name">  MSS - Modify/Approve/Reject</h3>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage percent2"></span>
                </div>

                <div className="skills__titles">
                  <h3 className="skills__name">Institutional Order - Modify/Approve/Reject</h3>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage percent3"></span>
                </div>

                <div className="skills__titles">
                  <h3 className="skills__name">Institutional Order Proposal Entry</h3>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage percent4"></span>
                </div>

                
                <div className="skills__titles">
                  <h3 className="skills__name"> CRM/GCRM Report</h3>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage percent4"></span>
                </div>
                </>
                )}
              </div>
            </div>
          </div>
  

     {props.grpProp &&(
          <div className="about__data grid">
            <div className="about__skills grid">
              <div className="skills__data">

                <div className="skills__titles">
                  <h3 className="skills__name" onClick={()=>navigate("/groupmss")}>  Group MSS - Modify/Approve/Reject</h3>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage percent1"></span>
                </div>
                <br/><br/><br/><br/><br/><br/><br/>
              </div>
            </div>
          </div>)
          }
      </div>
    </section>
  )
}

export default About