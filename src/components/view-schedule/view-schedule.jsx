import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { PathConstants } from '../../lib/path-constants';
import { toReadableDateFormat } from '../../lib/time-util';
import { UserRole } from '../../lib/types';
import { PaginationComponent } from '../pagination/pagination';
import request from "../../lib/request";
import { useDispatch } from 'react-redux';
import { COUNSELOR_APPOINTMENTS_CANCEL_ERROR } from "../../store/types";
import CounselorEditAppointment from "../../containers/counselor-edit-appointment";
import { openErrorMessageModal } from "../../store/actions/gui";
import './view-schedule.css';
import DoctorEditAppointment from "../../containers/doctor-edit-appointment";

const Button = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    touch-action: manipulation;
    height: 32px;
    padding: 4px 15px;
    font-size: 18px;
    border-radius: 0.8rem;
    color: rgba(0, 0, 0, 0.85);
    border: 1px solid #d9d9d9;
    background: #fff;

    &:focus,
    &:hover {
        color: #40a9ff;
        border-color: #40a9ff;
        background: #fff;
    }
    &,
    &:active,
    &:focus {
        outline: 0;
    }

    &.forward:hover {
        color: #008000;
        border-color: #008000;
        text-shadow: none;
    }

    &.dangerous {
        color: #ff4d4f;
        border-color: #ff4d4f;
        text-shadow: none;
    }
    &.dangerous {
        color: #ff4d4f;
        border-color: #ff4d4f;
        text-shadow: none;
    }
    &.dangerous:hover {
        text-decoration: none;
        background: #fff;
    }
    `;



function searchFunctionCounselor() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("myScheduleTable");

    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

export function ViewScheduleComponent({ payload, role }) {
    const navigate = useNavigate();

    const onPageChange = (page) => {
        navigate({
            pathname: role === UserRole.COUNSELOR ? PathConstants.CounselorLOP :
                PathConstants.DoctorLOP, search: `page=${page}`
        });
    };
    const dispatch = useDispatch();
    const handleCancelAppointment = async (appointmentId) => {
        if (role === UserRole.COUNSELOR) {
            try {
                await request(`counselor/appointment/${appointmentId}`, "DELETE", null, null);
                window.location.reload();
            } catch (exception) {
                dispatch(openErrorMessageModal(exception.data.errorMessage));
                dispatch({
                    type: COUNSELOR_APPOINTMENTS_CANCEL_ERROR,
                    errorMessage: exception.data.errorMessage
                });
            }

        } else {
            try {
                await request(`doctor/appointment/${appointmentId}`, "DELETE", null, null);
                window.location.reload();
            } catch (exception) {
                dispatch(openErrorMessageModal(exception.data.errorMessage));
            }
        }
    };

    const [appointmentVisibility, setAppointmentVisibility] = useState({
        isOpen: false,
    });

    const onOpenScheduler = (props) => {
        setAppointmentVisibility({
            isOpen: true,
            ...props,
        });
    };

    const EditAppointment =
    role === UserRole.DOCTOR ? DoctorEditAppointment : CounselorEditAppointment;

    return (
        <>
            <h2 className='schedule-table-header' style={{ fontSize: '40px' }}>Appointment Schedule</h2>
            <div>
                <input type="search" id="mySearch" onKeyUp={() => searchFunctionCounselor()}
                    placeholder="🔍 Search for Date.." title="Type in a name" >
                </input>

                <table className='schedule' id='myScheduleTable'>
                    <tbody>
                        <tr>
                            <th>Patient Name</th>
                            <th>Date & Time</th>
                            <th>View Assessment</th>
                            <th>Cancel the Appointment</th>
                            <th>Edit the Appointment</th>
                        </tr>
                        {
                            payload.content.map((record, recordIndex) => {
                                return <tr key={`counselor-appointment-${recordIndex}`}>
                                    <td>{record.patient.fullName}</td>
                                    <td>{`${toReadableDateFormat(record.startDateTime)}`}</td>
                                    <td><Link className='view-file-button' to={{
                                        pathname: (
                                            role === UserRole.COUNSELOR ? PathConstants.Internal_CounselorPatientDetails :
                                                PathConstants.Internal_DoctorPatientDetails
                                        ) + record.patientRecordId
                                    }}>View File</Link></td>

                                    <td><Link className='view-file-button'
                                        onClick={() => handleCancelAppointment(record.appointmentId)}

                                    >Cancel</Link></td>
                                    <td>
                                        <Button
                                            title="Edit Appointment"
                                            onClick={() => {
                                                onOpenScheduler(record);
                                            }}
                                        >
                                            Edit Appointment
                                        </Button>
                                    </td>

                                </tr>
                            })
                        }
                    </tbody>
                </table>

            </div>
            <br></br>
            <PaginationComponent
                onPageChange={onPageChange}
                pageNumber={payload.pageable.pageNumber}
                totalPages={payload.totalPages}
                first={payload.first}
                last={payload.last}
            />

            {appointmentVisibility.isOpen && (
                <EditAppointment
                    onUpdateVisibility={setAppointmentVisibility}

                    {...appointmentVisibility}
                />
            )}
            <div className='extra'>
            </div>
        </>
    )
}