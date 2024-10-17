import React, { useState, useEffect } from 'react';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointmentDate, setNewAppointmentDate] = useState('');
  const [editingAppointmentId, setEditingAppointmentId] = useState(null);
  const [editingAppointmentDate, setEditingAppointmentDate] = useState('');

  // Simulated API call to fetch appointments (GET)
  useEffect(() => {
    const fetchAppointments = async () => {
      const initialAppointments = [
        { id: 1, date: '2024-01-15T10:00', status: 'Confirmed' },
        { id: 2, date: '2024-01-20T14:00', status: 'Pending' },
      ];
      setAppointments(initialAppointments);
    };
    fetchAppointments();
  }, []);

  // Handle booking a new appointment (POST)
  const handleAddAppointment = () => {
    if (!newAppointmentDate) return;
    const newAppointment = { id: Date.now(), date: newAppointmentDate, status: 'Pending' };
    setAppointments((prev) => [...prev, newAppointment]);
    setNewAppointmentDate('');
  };

  // Handle updating an existing appointment (PUT)
  const handleUpdateAppointment = (id) => {
    if (!editingAppointmentDate) return;
    setAppointments((prev) =>
      prev.map((appt) => (appt.id === id ? { ...appt, date: editingAppointmentDate } : appt))
    );
    setEditingAppointmentId(null);
    setEditingAppointmentDate('');
  };

  // Handle deleting an appointment (DELETE)
  const handleDeleteAppointment = (id) => {
    setAppointments((prev) => prev.filter((appt) => appt.id !== id));
  };

  return (
    <div className="appointments-container">
      <h2 className="appointments-title">Appointments</h2>
      <p className="appointments-intro">Here you can manage your appointments.</p>

      <div className="add-appointment">
        <input
          type="datetime-local"
          value={newAppointmentDate}
          onChange={(e) => setNewAppointmentDate(e.target.value)}
        />
        <button className="button add" onClick={handleAddAppointment}>Add Appointment</button>
      </div>

      <div className="appointments-list">
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <div key={appointment.id} className="appointment-card">
              <p className="appointment-date">
                {new Date(appointment.date).toLocaleString()}
              </p>
              {editingAppointmentId === appointment.id ? (
                <div>
                  <input
                    type="datetime-local"
                    value={editingAppointmentDate}
                    onChange={(e) => setEditingAppointmentDate(e.target.value)}
                  />
                  <button className="button save" onClick={() => handleUpdateAppointment(appointment.id)}>Save</button>
                </div>
              ) : (
                <>
                  <p className="appointment-status">{appointment.status}</p>
                  <div className="appointment-actions">
                    <button className="button edit" onClick={() => { setEditingAppointmentId(appointment.id); setEditingAppointmentDate(appointment.date); }}>Edit</button>
                    <button className="button delete" onClick={() => handleDeleteAppointment(appointment.id)}>Delete</button>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <p>No appointments found.</p>
        )}
      </div>
    </div>
  );
};

export default Appointments;
