import React from 'react';

const donorsData = [
  { id: 1, name: "John Doe", bloodType: "O+", lastDonation: "2024-01-15" },
  { id: 2, name: "Jane Smith", bloodType: "A+", lastDonation: "2024-03-10" },
  { id: 3, name: "Alice Johnson", bloodType: "B-", lastDonation: "2024-02-20" },
];

const Donors = () => {
  return (
    <div className="donors-container">
      <h2 className="donors-title">List of Donors</h2>
      <p className="donors-subtitle">Here you can view the list of blood donors.</p>
      <div className="donors-list">
        {donorsData.length > 0 ? (
          donorsData.map((donor) => (
            <div key={donor.id} className="donor-item">
              <h3 className="donor-name">{donor.name}</h3>
              <p className="donor-details">
                Blood Type: <strong>{donor.bloodType}</strong>
              </p>
              <p className="donor-details">
                Last Donation: <strong>{donor.lastDonation}</strong>
              </p>
            </div>
          ))
        ) : (
          <p>No donors found.</p>
        )}
      </div>
    </div>
  );
};

export default Donors;
