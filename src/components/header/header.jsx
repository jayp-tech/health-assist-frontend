import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../images/caduceus_2.png';
import { PathConstants } from '../../lib/path-constants'
import { UserRole } from '../../lib/types'
import './header.css'

export default function HeaderComponent({
    userRole,
    loginPath,
    onLogout
}) {
    const location = useLocation();
    return (
        <div className="header" >  
             <div className="logo-container">
            <Link to={PathConstants.Home} className="logo-text"><img src={logo} alt="Health Assists Logo" width="80" height="80" /> Health Assist</Link>
            </div>
        
            <div className="header-right">
            
                 {/* Hide Login button if current path matches loginPath */}    
                {userRole === UserRole.NULL && location.pathname !== loginPath && <Link to={loginPath}>Log In</Link>}

                {/* {userRole === UserRole.NULL && <Link to={loginPath}>Log In</Link>} */}
                
                {userRole === UserRole.PATIENT && <Link to={PathConstants.AssessmentPage}>Take Assessment</Link>}
                {userRole === UserRole.PATIENT && <Link to={PathConstants.StatusPage}>Status</Link>}
                {userRole === UserRole.COUNSELOR && <Link to={PathConstants.CounselorLOP}>List of Patients</Link>}
                {userRole === UserRole.COUNSELOR && <Link to={PathConstants.CounselorSchedule}>View Schedule</Link>}
                {userRole === UserRole.DOCTOR && <Link to={PathConstants.DoctorLOP}>List of Patients</Link>}
                {userRole === UserRole.DOCTOR && <Link to={PathConstants.DoctorSchedule}>View Schedule</Link>}
                {userRole === UserRole.PATIENT && <Link to={PathConstants.PatientEditProfile}>Edit</Link>}
                {userRole === UserRole.COUNSELOR && <Link to={PathConstants.CounselorEditProfile}>Edit</Link>}
                {userRole === UserRole.DOCTOR && <Link to={PathConstants.DoctorEditProfile}>Edit</Link>}
                {userRole !== UserRole.NULL && <Link to="#" onClick={onLogout}>Log out</Link>}
                
            </div>
         </div>
    )
}