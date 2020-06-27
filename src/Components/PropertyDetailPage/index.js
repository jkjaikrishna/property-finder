import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Row, Container, Col, Button } from 'reactstrap';

/**
 * Internal Components
 */

import SideNavbar from '../SharedComponents/SideNavbar';
import TopHeader from './../SharedComponents/TopHeader';
import MainSection from './../MainSection';
import Page404 from './../Page404/index';

/**
 * Store Actions for Dispatching
 */

import { getPropertyDetails } from '../../Store/Actions';


function mapStateToProps(props) {
    return {
        details: props.currentProperty
    }
}

const mapDispatchToProps = {
    getPropertyDetails
}

class PropertyDetailPage extends Component {

    componentDidMount() {
        this.props.getPropertyDetails(this.props.match.params.propertyId);
    }

    render(props) {
        let details = this.props.details;
        if(!details) return  <Page404 />
        return (
            <Fragment>
                <SideNavbar />
                <TopHeader title= "Property Details" />
                <main className ="main-view">
                    <Container>
                        <Row>
                            <Col xs="12" sm="6" md="7">
                            <figure>
                                <img className= "property-img" src= {details.image} alt= { `${details.city}-${details.customer}` } />
                            </figure>
                            </Col>
                            <Col xs="12" sm="6" md="5">
                                <div className= "property-status">
                                    <h4>{details.name}, {details.state}</h4>
                                    <Button className= {details.status && details.status.toLowerCase()} >{details.status}</Button>
                                </div>
                                <p>
                                    {details.street_name}, {details.street_address} , 
                                    {details.postal_code}, {details.city}, { details.country}
                                </p>
                                <p className= "location-drop">
                                    <figure>
                                        <img src= "/assets/icons/pin.png" alt= "map-icon" />
                                    </figure>
                                    {details.location_lat}, {details.location_lng}
                                </p>
                                <section className= "customer-reviews">
                                    <figure>
                                        <img src= "/assets/icons/icon-user.svg" alt= "user-icon" />
                                    </figure>
                                    <span className= "customer-name">{details.customer}</span>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                                        It has roots in a piece of classical Latin literature from 45 BC, 
                                        making it over 2000 years old. Richard McClintock, a Latin professor 
                                        at Hampden-Sydney College in Virginia, looked up one of the more 
                                        obscure Latin words, consectetur, from a Lorem Ipsum passage, and 
                                        going through the cites of the word in classical literature, discovered 
                                        the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 
                                        1.10.33 of "de Finibus Bonorum et Malorum".
                                    </p>
                                    <p>
                                        The Extremes of Good and Evil by Cicero, written in 45 BC. This book is a treatise on the theory 
                                        of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                                        "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    </p>
                                </section>
                            </Col>
                        </Row>
                    </Container>
                </main>
            </Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyDetailPage);