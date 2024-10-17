import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Swal from 'sweetalert2';

const Dashboard = () => {
  const [appointmentDate, setAppointmentDate] = useState('');

  const handleBookAppointment = () => {
    Swal.fire({
      title: 'Book an Appointment',
      input: 'datetime-local',
      inputLabel: 'Select Date and Time',
      inputPlaceholder: 'Select Date and Time',
      showCancelButton: true,
      confirmButtonText: 'Book Appointment',
      cancelButtonText: 'Cancel',
      inputAttributes: {
        min: new Date().toISOString().slice(0, 16), // Set minimum date/time to now
      },
      preConfirm: (value) => {
        if (!value) {
          Swal.showValidationMessage('You need to select a date and time');
        } else {
          setAppointmentDate(value);
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Appointment Booked',
          text: `Your appointment is scheduled for ${result.value}.`,
        });
      }
    });
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <main className="dashboard-content">
        <h1>Welcome to Your Dashboard</h1>
        <p>Here you can manage your appointments, view lists, contact support, and access essential information.</p>
        <button onClick={handleBookAppointment}>Book Appointment</button>
        {appointmentDate && (
          <div>
            <h2>Scheduled Appointment:</h2>
            <p>{appointmentDate}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
