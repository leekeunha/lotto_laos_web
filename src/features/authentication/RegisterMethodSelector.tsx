import { Typography } from '@material-tailwind/react';
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

export default function RegisterMethodSelector() {
    return (
        <div className="grid grid-cols-2 gap-3">
            <NavLink
                to={'/register/mobile'}
                className="flex flex-col items-center justify-center border border-gray-300 h-36 w-36 p-5"
            >
                <Typography className="mb-3" variant="small">
                    Register with Mobile Phone Number
                </Typography>
                <FontAwesomeIcon icon={faMobileAlt} className="text-gray-500 mb-2" size="2x" />
            </NavLink>
            <NavLink
                to={'/register/email'}
                className="flex flex-col items-center justify-center border border-gray-300 h-36 w-36 p-5"
            >
                <Typography className="mb-3" variant="small">
                    Register with Email Address
                </Typography>
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mb-2" size="2x" />
            </NavLink>
        </div>
    );
}
