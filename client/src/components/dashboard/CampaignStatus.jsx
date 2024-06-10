import React from 'react';

const CampaignStatusItem = ({ campaign }) => {
  const statusClass = campaign.status === 'ACTIVE' ? 'active' : 'inactive';

  return (
    <div className={`campaign-status-item ${statusClass}`}>
      <h3>{campaign.name}</h3>
      <p>Status: {campaign.status}</p>
      <p>Budget: {campaign.budget}</p>
      <p>Total Pengeluaran: {campaign.cost}</p>
      {/* Tampilkan data lain yang relevan */}
    </div>
  );
};

export default CampaignStatusItem;
