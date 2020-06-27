import React, { Fragment } from 'react';

/**
 * Internal Components
 */

import SingleProperty from './SingleProperty';

/**
 * CSS Components
 */

import './ListProperties.scss';

const ListProperties = ({ list }) => {
    return list.map( property => {
        return <SingleProperty key= {property.guid} details= {property} />
    });
}

export default ListProperties;