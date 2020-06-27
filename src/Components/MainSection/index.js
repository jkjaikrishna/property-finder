import React, { Fragment } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Components
 */
import ListProperties from './ListProperties';


function mapStateToProps(props) {
    return {
        properties: props.properties
    }
}

const MainSection = (props) => {
    return (
        <Fragment>
            {
                props.properties.length > 0 ? 
                <ListProperties  list= {props.properties} />
                : <div>Nothing result in your view..</div>
            }
        </Fragment>
    )
}

export default connect(mapStateToProps, null)(MainSection);