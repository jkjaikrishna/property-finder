import React, { Fragment } from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';


const SingleProperty = ({ details }) => {
    return (
        <Col xs="12" sm="6" md="4">
            <Link to= {`/property/${details.guid}`}>
            <figure>
                <img className= "property-img" src= {details.image} alt= { `${details.city}-${details.customer}` } />
                <figcaption>{details.name}, {details.state}</figcaption>
                <p>{details.city}, { details.country}</p>
            </figure>
            </Link>
        </Col>
    )
}

export default SingleProperty;