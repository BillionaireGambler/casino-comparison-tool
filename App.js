// App.js
import React, { useState } from "react";
import CasinoCard from "./components/CasinoCard";
import FilterControls from "./components/FilterControls";
import casinos from "./data/casinos.json";
import "./styles/globals.css";

export default function App() {
  const [filters, setFilters] = useState({ bonusType: "All" });

  const applyFilters = (casino) => {
    if (filters.bonusType !== "All" && casino.bonus !== filters.bonusType) {
      return false;
    }
    return true;
  };

  return (
    <div className="app">
      <h1>Compare UK Online Casinos</h1>
      <FilterControls filters={filters} setFilters={setFilters} />
      <div className="casino-list">
        {casinos.filter(applyFilters).map((casino) => (
          <CasinoCard key={casino.name} casino={casino} />
        ))}
      </div>
    </div>
  );
}
