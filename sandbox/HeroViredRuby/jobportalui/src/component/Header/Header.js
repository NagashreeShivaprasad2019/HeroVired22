import React from 'react'
import "./Header.css"
export default function Header() {
  return (
    <>
      <div className="header" id="id1">
        <div className="section1">
          <div className="logo">
            <img src="./Images/herovired.jpg" alt="Jobportal" height="50px" width="50px" />
          </div>
        </div>

        <div id="Dashboard" className="Dashboard"><br></br>
        <p>Dashboard</p><br></br>
      </div>

        
        <div id="ApplicationProfile" className="ApplicationProfile"><br></br>
         <p>Application Profile </p> <br></br>
        </div>

        <div id="AppliedJobs" className="AppliedJobs"><br></br>
        <p>Applied Jobs</p><br></br>
        </div>

        <div id="Activity" className="Activity"><br></br>
        <p> Activity</p><br></br>
        </div>

        <div id ="JobAgent" className="JobAgent" ><br></br>
        <p> Job Agent</p><br></br>
        </div>




      </div>


    </>
  )
}