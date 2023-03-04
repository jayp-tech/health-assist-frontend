import React from 'react'
import { Link } from 'react-router-dom'
import { PathConstants } from '../../lib/path-constants'
import { UserRole } from '../../lib/types'
import './header.css'
import logo from "./images/caduceus_2.png";

export default function HeaderComponent({
    userRole,
    loginPath,
    onLogout
}) {
    return (
        <div className="header" >
         <img src={logo} alt="Health Assist Logo" className="lll" />
            <Link to={PathConstants.Home} className="logo">Health assist</Link>
            <div className="header-right">
                {/* <a className="active" href="#home">Home</a> */}
                {userRole === UserRole.NULL && <Link to={loginPath}>Log In</Link>}
                {userRole !== UserRole.NULL && <button onClick={onLogout}>Log out</button>}
                {userRole === UserRole.PATIENT && <Link to={PathConstants.AssessmentPage}>Take Assessment</Link>}
                {userRole === UserRole.PATIENT && <Link to={PathConstants.StatusPage}>Status</Link>}
                {userRole === UserRole.COUNSELOR && <Link to={PathConstants.CounselorLOP}>List of Patients</Link>}
                {userRole === UserRole.COUNSELOR && <Link to={PathConstants.CounselorSchedule}>View Schedule</Link>}
                {userRole === UserRole.DOCTOR && <Link to={PathConstants.DoctorLOP}>List of Patients</Link>}
                {userRole === UserRole.DOCTOR && <Link to={PathConstants.DoctorSchedule}>View Schedule</Link>}
                {userRole === UserRole.PATIENT && <Link to={PathConstants.PatientEditProfile}>Edit</Link>}
                {userRole === UserRole.COUNSELOR && <Link to={PathConstants.CounselorEditProfile}>Edit</Link>}
                {userRole === UserRole.DOCTOR && <Link to={PathConstants.DoctorEditProfile}>Edit</Link>}
            </div>
        </div>
    )
}