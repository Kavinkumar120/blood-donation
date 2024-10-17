import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Swal from 'sweetalert2';
// Import the CSS file

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [appointmentDate, setAppointmentDate] = useState('');

  useEffect(() => {
    const fetchAppointments = async () => {
      const initialAppointments = [
        { id: 1, date: '2023-10-20T10:00' },
        { id: 2, date: '2023-10-21T14:00' },
      ];
      setAppointments(initialAppointments);
    };
    fetchAppointments();
  }, []);

  const handleBookAppointment = () => {
    Swal.fire({
      title: 'Book an Appointment',
      input: 'datetime-local',
      showCancelButton: true,
      confirmButtonText: 'Book Appointment',
      cancelButtonText: 'Cancel',
      inputAttributes: {
        min: new Date().toISOString().slice(0, 16),
      },
      preConfirm: (value) => {
        if (!value) {
          Swal.showValidationMessage('You need to select a date and time');
        } else {
          const newAppointment = { id: Date.now(), date: value };
          setAppointments((prev) => [...prev, newAppointment]); 
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

  const handleUpdateAppointment = (id) => {
    const appointmentToUpdate = appointments.find((appt) => appt.id === id);
    Swal.fire({
      title: 'Update Appointment',
      input: 'datetime-local',
      inputValue: appointmentToUpdate.date,
      showCancelButton: true,
      confirmButtonText: 'Update Appointment',
      cancelButtonText: 'Cancel',
      preConfirm: (value) => {
        if (!value) {
          Swal.showValidationMessage('You need to select a date and time');
        } else {
          setAppointments((prev) =>
            prev.map((appt) => (appt.id === id ? { ...appt, date: value } : appt))
          ); 
        }
      },
    });
  };

  const handleDeleteAppointment = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This appointment will be deleted.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setAppointments((prev) => prev.filter((appt) => appt.id !== id)); 
        Swal.fire('Deleted!', 'Your appointment has been deleted.', 'success');
      }
    });
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <main className="dashboard-content">
        <h1 className="dashboard-title">Welcome to Your Dashboard</h1>
        <p className="dashboard-intro">Manage your appointments, view lists, and access essential information.</p>
        <button className="button primary" onClick={handleBookAppointment}>Book Appointment</button>
        
        <h2 className="appointments-title">Your Appointments:</h2>
        <div className="appointments-list">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="appointment-card">
              <p className="appointment-date">{new Date(appointment.date).toLocaleString()}</p>
              <div className="appointment-actions">
                <button className="button secondary" onClick={() => handleUpdateAppointment(appointment.id)}>Edit</button>
                <button className="button danger" onClick={() => handleDeleteAppointment(appointment.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
