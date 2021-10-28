import React, { useState, useEffect } from 'react';
import Topbar from '../components/Topbar';
import Filterbar from '../components/Filterbar';
import Venues from '../components/Venues';
import data from '../assets/data/venue-data';
import '../styles/pages/Homepage.css';

const Homepage = () => {

    const [venueList, setVenueList] = useState([]);
    const [capacity, setCapacity] = useState(1);
    const [dayCount, setDayCount] = useState(1);

    const filteredVenueList = (cap, availability) => {
        return venueList.filter(venue => venue.capacity === cap && venue.availability <= availability)
    };

    useEffect(() => {
        setVenueList(data);
    }, []);

    return (
        <>
            <div className='homepage'>
                <Topbar />
                <Filterbar
                    capacity={capacity}
                    setCapacity={setCapacity}
                    setDayCount={setDayCount}
                />
                <Venues
                    dayCount={dayCount}
                    capacity={capacity}
                    filteredVenueList={filteredVenueList(capacity, dayCount)}
                />
            </div>
        </>
    )
}

export default Homepage;