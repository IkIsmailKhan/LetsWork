import React from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import '../styles/components/Confirmation.css'

const Confirmation = ({ venue, dayCount }) => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleConfirmation = () => {
        handleOpen();
    }

    return (
        <>
            <div
                className='booking-btn'
                onClick={handleConfirmation}>
                Book
            </div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <div className='confirmation-title'>
                        CONFIRMATION
                    </div>

                    <div className='confirmation-modal'>
                        <div className='confirmation-result'>
                            <span className='confirmation-label'>
                                Venue
                            </span>
                            {venue.name}
                        </div>

                        <div className='confirmation-result'>
                            <span className='confirmation-label'>
                                Address
                            </span>
                            {venue.address}
                        </div>

                        <div className='confirmation-result'>
                            <span className='confirmation-label'>
                                Total Cost
                            </span>
                            {venue.price} x {dayCount} = {venue.price * dayCount}
                        </div>

                        <div className='confirmation-result'>
                            <span className='confirmation-label'>
                                Days
                            </span>
                            {dayCount}
                        </div>

                        <div className='confirmation-result'>
                            <span className='confirmation-label'>
                                Capacity
                            </span>
                            {venue.capacity}
                        </div>
                    </div>

                    <Button onClick={handleClose}>CONFIRM</Button>
                </Box>
            </Modal>
        </>
    )
}

export default Confirmation;

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
};