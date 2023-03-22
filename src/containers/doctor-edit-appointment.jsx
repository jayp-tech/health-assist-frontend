import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditAppointment } from "../components/make-appointment/edit-appointment";
import { toUTCDateTime } from "../lib/time-util";
import { RequestState } from "../lib/types";
import {
  fetchAppointmentsForDate,
  editAppointment
} from "../store/actions/doctor-appointments";

export default function DoctorEditAppointment({
  patient,
  patientRecordId,
  onUpdateVisibility,
}) {

  const dispatch = useDispatch();

  const onSelectDate = (date) => {
    dispatch(fetchAppointmentsForDate(date));
  };

  useEffect(() => {
    dispatch(fetchAppointmentsForDate(toUTCDateTime(new Date())));
  }, [dispatch]);

  const requestState = useSelector((state) => state.doctorAppointments.appointment.state);

  const payload = useSelector((state) =>
    requestState === RequestState.COMPLETED
      ? state.doctorAppointments.appointment.payload
      : null
  );


  const onEditAppointment = ({ startTime, endTime }) => {
    dispatch(
      editAppointment(
        patientRecordId,
        toUTCDateTime(startTime),
        toUTCDateTime(endTime)
      )
    );
  };

  return (
    <EditAppointment
      patient={patient}
      onUpdateVisibility={onUpdateVisibility}
      onSelectDate={onSelectDate}
      payload={payload}
      requestState={requestState}
      onEditAppointment={onEditAppointment}
    />
  );
}