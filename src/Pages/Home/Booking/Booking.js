import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {id} = useParams()
    return (
        <div>
            <h2>this is booking {id}</h2>
        </div>
    );
};

export default Booking;