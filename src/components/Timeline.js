import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';

const Timeline = ({ setDayCount }) => {

    const [state, setState] = React.useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const saveDates = () => {
        const endArr = state.map(item => item.endDate)
        const endStr = endArr.toString().substring(8, 10)
        const endInt = parseInt(endStr);

        const startArr = state.map(item => item.startDate)
        const startStr = startArr.toString().substring(8, 10)
        const startInt = parseInt(startStr);

        setDayCount(endInt - startInt);
        setOpen(false);
    }

    return (
        <div>
            <Button onClick={handleOpen}>TimeLine</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <DateRange
                        editableDateInputs={true}
                        onChange={item => setState([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                    />
                    <Button onClick={saveDates}>CONFIRM</Button>
                </Box>
            </Modal>
        </div>
    );
}

export default Timeline;

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