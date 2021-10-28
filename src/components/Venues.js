import React from 'react';
import Confirmation from './Confirmation';
import '../styles/components/Venues.css';
import ParkingLogo from '../assets/images/facility-parking';
import MeetingLogo from '../assets/images/facility-meeting';
import MosqueLogo from '../assets/images/facility-mosque';

const Venues = ({ filteredVenueList, capacity, dayCount }) => {

    return (
        <>
            <div className='venue-wrapper'>
                {
                    filteredVenueList.length === 0 ?
                        <>
                            <div className='no-venue-container'>
                                <div className='no-venue-label'>No Venue Found for {capacity} Persons & {dayCount} Days</div>
                            </div>
                        </>
                        :
                        filteredVenueList.map(venue => (
                            <div key={venue.id}>
                                <div className='venue-card'>
                                    <div className='card-left'>
                                        <img
                                            className='card-img'
                                            src={venue.image}
                                            height='140'
                                            width='200'
                                            alt='card-image'
                                        />
                                    </div>
                                    <div className='card-mid'>
                                        <div className='section-left'>
                                            <div>
                                                <div className='venue-card-heading'>
                                                    {venue.name}
                                                </div>
                                                <div className='venue-card-subheading'>
                                                    {venue.address}
                                                </div>
                                            </div>

                                        </div>
                                        <div className='section-left'>
                                            <div className='venue-card-facility'>
                                                <div className='venue-card-facility-svg'>
                                                    {MeetingLogo}
                                                </div>
                                                <div className='venue-card-facility-svg'>
                                                    {ParkingLogo}
                                                </div>
                                                <div className='venue-card-facility-svg'>
                                                    {MosqueLogo}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='section-left'>
                                            <div className='venue-card-heading'>
                                                {venue.capacity} Person
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-right'>
                                        <div className='section-right'>
                                            <div>
                                                <div className='venue-card-heading'>
                                                    AED {venue.price * dayCount}
                                                </div>
                                                <div className='venue-card-subheading'>
                                                    {dayCount} Days
                                                </div>
                                            </div>

                                        </div>
                                        <div className='section-right'>
                                            <div>
                                                <div className='venue-card-options'>
                                                    Book instantly
                                                </div>
                                                <div className='venue-card-options'>
                                                    Cancel for free
                                                </div>
                                            </div>
                                        </div>
                                        <div className='section-right'>
                                            <Confirmation
                                                venue={venue}
                                                dayCount={dayCount}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                }
            </div>
        </>
    )
}

export default Venues;

