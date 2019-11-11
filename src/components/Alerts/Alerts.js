// IMPORTS
import React from 'react';
import './Alerts.css';
import Alert from 'react-bootstrap/lib/Alert';

const Alerts = props => (
    <Alert bsStyle={`${props.alertType}`}>
        <h3>
            <strong>{props.message1}</strong> {props.message2}
        </h3>
    </Alert>
);

export default Alerts;