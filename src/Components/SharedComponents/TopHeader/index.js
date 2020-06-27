import React, { Fragment } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

/**
 * CSS Components
 */
import './TopHeader.scss';

const TopHeader = ({title}) => {
    return (
        <header className= "top-header">
            <h3>{ title }</h3>
            <section>
                <img src= "/assets/images/avatar.jpg" alt= "user-avatar" />
            </section>
        </header>
    )
}

export default TopHeader;