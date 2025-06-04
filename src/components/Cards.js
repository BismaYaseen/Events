import React, { useEffect, useRef, useState } from 'react';
import './Cards.css';
import { FaChevronDown, FaChevronUp, FaArrowUp } from 'react-icons/fa';

const Cards = ({ events = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const cardsToShow = 3;
  const intervalRef = useRef(null);

  // Filter events based on search term
  const filteredEvents = events.filter(event => 
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (!isExpanded && filteredEvents.length > cardsToShow) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) =>
          (prev + 1) % Math.max(filteredEvents.length - cardsToShow + 1, 1)
        );
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [filteredEvents.length, isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentIndex(0); // Reset carousel position when searching
  };

  return (
    <div className="cards-section">
      <div className="section-title">
        <h2>Upcoming Events</h2>
        <div className="search-container">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search events..." 
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {filteredEvents.length === 0 ? (
        <div className="no-results">No events found matching your search.</div>
      ) : (
        <div className={`cards-container ${isExpanded ? 'expanded' : ''}`}>
          <div
            className={`cards-carousel ${isExpanded ? 'wrap' : ''}`}
            style={{
              transform: isExpanded
                ? 'none'
                : `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              transition: isExpanded ? 'none' : 'transform 0.8s ease',
              width: isExpanded ? '100%' : `${(filteredEvents.length / cardsToShow) * 100}%`,
            }}
          >
            {filteredEvents.map((event, index) => (
              <div className="event-card" key={event.id || index}>
                <h3>{event.name}</h3>
                <p>{event.date} | {event.time}</p>
                <p>{event.location}</p>
                <p>{event.description}</p>
                <button className="register-btn">Register</button>
              </div>
            ))}
          </div>
          
          {filteredEvents.length > cardsToShow && (
            <>
              <div className="dots-container"></div>
              <button className="toggle-cards" onClick={toggleExpand}>
                {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Cards;