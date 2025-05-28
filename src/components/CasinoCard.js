// components/CasinoCard.js
import React from "react";

export default function CasinoCard({ casino }) {
  return (
    <div className="casino-card">
      <h2>{casino.name}</h2>
      <p><strong>Bonus:</strong> {casino.bonus}</p>
      <p><strong>Payout Speed:</strong> {casino.payout}</p>
      <p><strong>Licensing:</strong> {casino.license}</p>
      <a href={casino.link} target="_blank" rel="noopener noreferrer">Visit Casino</a>
    </div>
  );
}

// components/FilterControls.js
import React from "react";

export default function FilterControls({ filters, setFilters }) {
  return (
    <div className="filters">
      <label>
        Bonus Type:
        <select
          value={filters.bonusType}
          onChange={(e) => setFilters({ ...filters, bonusType: e.target.value })}
        >
          <option value="All">All</option>
          <option value="Free Spins">Free Spins</option>
          <option value="No Deposit">No Deposit</option>
          <option value="Matched Bonus">Matched Bonus</option>
        </select>
      </label>
    </div>
  );
}
