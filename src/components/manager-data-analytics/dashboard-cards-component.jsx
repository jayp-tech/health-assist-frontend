import { faPersonChalkboard, faUser, faUserDoctor, faUserNurse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './dashboard-cards.css'


export default function DashboardCardsComponent({ payload }) {
    return (
        <div className='wrapper'>
        <div className='dashboard-card-rows'>
            <div className='dashboard-card-columns'>
                <div className='dashboard-card-cards cards-color-users tooltiptext'>
                    <div className='icon icon1'>
                        <FontAwesomeIcon icon={faUser} className='users-cards'></FontAwesomeIcon>
                    </div>
                    <div className='Stats'>
                        <h3 style={{ fontSize: "1.7rem" }}>Total Patients</h3>
                        <p className='show-data-cards'>{payload.numTotal}</p>
                        <span className="tooltiptext">Total patients registered to the system.</span>
                    </div>
                </div>
            </div>

            <div className='dashboard-card-columns'>
                <div className='dashboard-card-cards cards-color-assessments tooltiptext'>
                    <div className='icon icon2'>
                     <FontAwesomeIcon icon={faPersonChalkboard} className='users-cards'></FontAwesomeIcon>
                    </div>
                    <div className='Stats'>
                        <h3 style={{ fontSize: "1.7rem" }}>Assessments</h3>
                        <p className='show-data-cards'>{payload.numAttemptedAssessment}</p>
                        <span className="tooltiptext">Waiting for counselor to process the file.</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='dashboard-card-rows'>
            <div className='dashboard-card-columns'>
                <div className='dashboard-card-cards cards-color-meeting-counselor tooltiptext'>
                  <div className='icon icon3'>
                     <FontAwesomeIcon icon={faUserNurse} className='users-cards'></FontAwesomeIcon>
                   </div>
                   <div className='Stats'>
                        <h3 style={{ fontSize: "1.7rem" }}>Meeting Counselor</h3>
                        <p className='show-data-cards'>{payload.numHasCounselorAppointment}</p>
                        <span className="tooltiptext">Has appointment with counselor</span>
                    </div>
                </div>
            </div>

            <div className='dashboard-card-columns'>
                <div className='dashboard-card-cards cards-color-meeting-doctor tooltiptext'>
                <div className='icon icon4'> 
                    <FontAwesomeIcon icon={faUserDoctor} className='users-cards'></FontAwesomeIcon>
                </div>
                <div className='Stats'>
                    <h3 style={{ fontSize: "1.7rem" }}>Meeting Doctor</h3>
                    <p className='show-data-cards'>{payload.numHasDoctorAppointment}<span>({payload.numInProcessingDoctorAppointment})</span></p>
                    <span className="tooltiptext"> Has appointment with doctor ( Waiting for doctor to process the file )</span>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}