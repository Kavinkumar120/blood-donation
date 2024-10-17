import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';

const AppointmentScheduler = () => {
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [isScheduled, setIsScheduled] = useState(false);

  const handleDateChange = (date) => {
    setAppointmentDate(date);
  };

  const handleSchedule = async () => {
    await Swal.fire({
      title: 'Appointment Scheduled',
      html: `<p>Your appointment is scheduled for: <strong>${appointmentDate.toLocaleString()}</strong></p>`,
      icon: 'success',
      confirmButtonText: 'OK'
    });
    setIsScheduled(true);
  };

  return (
    <div>
      <h2>Schedule Appointment</h2>
      <DatePicker 
        selected={appointmentDate} 
        onChange={handleDateChange} 
        showTimeSelect
        dateFormat="Pp"
      />
      <button onClick={handleSchedule}>Schedule</button>
      
      {isScheduled && (
        <div>
          <h3>Scheduled Appointment:</h3>
          <p>{appointmentDate.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
};

export default AppointmentScheduler;
