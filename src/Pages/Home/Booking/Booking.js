import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';



const Booking = () => {
    const {id} = useParams()
    const [service, setService] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${id}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[id])
    return (
        <Container>
            <h1 className="text-center py-5">TOP Regular Package In This Year</h1>
        <Row className="border border-secondary rounded g-4" md={2} xs={1}>
            <Col className="d-flex my-auto">
            <img className="img-fluid" src= {service.img} alt="" />
            </Col>
            <Col>
           <h1>{service.name}</h1> 
           <p> {service.des} {service.des}{service.des}</p>
           <h3>Regular Package 6 Night/7 Days <small>( $2000 )</small> </h3>
            </Col>
        </Row>
        </Container>
    );
};

export default Booking;