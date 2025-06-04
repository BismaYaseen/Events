import React from 'react';
import Cards from './Cards';
import './List.css';

const List = ({ events }) => {
  return (
    <div className="events-section">
      <h2 className="section-title">Featured Events</h2>
      <div className="events-grid">
        {events.length > 0 ? (
          events.map(event => (
            <Cards key={event.id} event={event} />
          ))
        ) : (
          <p className="no-events">No events found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default List;