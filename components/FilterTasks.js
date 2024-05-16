import React from 'react';

const FilterTasks = ({ filter, setFilter }) => (
  <div className="filter-container">
    <button
      className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
      onClick={() => setFilter('All')}
    >
      All
    </button>
    <button
      className={`filter-btn ${filter === 'Active' ? 'active' : ''}`}
      onClick={() => setFilter('Active')}
    >
      Active
    </button>
    <button
      className={`filter-btn ${filter === 'Completed' ? 'active' : ''}`}
      onClick={() => setFilter('Completed')}
    >
      Completed
    </button>
  </div>
);

export default FilterTasks;