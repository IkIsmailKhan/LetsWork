import React from 'react'
import Capacity from './Capacity';
import Timeline from './Timeline';
import '../styles/components/Filterbar.css';

const Filterbar = ({ capacity, setCapacity, setDayCount }) => {
    return (
        <>
            <div className='filter-bar'>
                <Capacity
                    capacity={capacity}
                    setCapacity={setCapacity}
                />
                <Timeline
                    setDayCount={setDayCount}
                />
            </div>
        </>
    )
}

export default Filterbar;