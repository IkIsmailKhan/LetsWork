import React from 'react';
import '../styles/components/Capacity.css'
import PlusLogo from '../assets/images/capacity-plus'
import MinusLogo from '../assets/images/capacity-minus'

const Capacity = ({ capacity, setCapacity }) => {


    const handleIncreaseCapacity = () => {
        setCapacity(capacity + 1)
    }

    const handleDecreaseCapacity = () => {
        if (capacity > 1) {
            setCapacity(capacity - 1)
        }
    }

    return (
        <>
            <div className='capacity-container'>
                <div
                    className='capacity-section'
                    onClick={handleDecreaseCapacity}
                >
                    {MinusLogo}
                </div>
                <div
                    className='capacity-section'
                >
                    {
                        capacity === 0 ? <>Capacity</> : <>
                            <div className='capacity-counter-heading'>
                                {capacity} PERSON
                            </div>
                        </>
                    }

                </div>
                <div
                    className='capacity-section'
                    onClick={handleIncreaseCapacity}
                >
                    {PlusLogo}
                </div>
            </div>
        </>
    )
}

export default Capacity;