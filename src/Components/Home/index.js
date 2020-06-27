import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Components
 */
import SideNavbar from './../SharedComponents/SideNavbar';
import TopHeader from './../SharedComponents/TopHeader';
import MainSection from './../MainSection';
import { Container, Row } from 'reactstrap';

/**
 * CSS Components
 */
import './Home.scss';



function mapStateToProps(props) {
    return {
        properties: props.properties
    }
}

class Home extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <Fragment>
                <SideNavbar />
                <TopHeader title= "Property Listing" />
                <main className ="main-view">
                    <Container>
                        <Row>
                            <MainSection />
                        </Row>
                    </Container>
                </main>
            </Fragment>
        )
    }
}

export default connect(mapStateToProps, null)(Home);