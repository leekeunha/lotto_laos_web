import React, { useState, useEffect } from 'react';
import { Typography, IconButton } from '@material-tailwind/react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { LoadScript } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY, SEARCH_STORE_TABLE_HEAD } from '../../utils/constants';

import StoreDialog from './SearchStoreDialog';

const defaultCenter = {
    lat: 0,
    lng: 0,
};

export default function SearchStoreTable({ stores }) {
    const [open, setOpen] = useState(false);
    const [selectedDistributor, setSelectedDistributor] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [mapCenter, setMapCenter] = useState(defaultCenter);
    useEffect(() => {
        if (selectedLocation) {
            fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?address=${selectedLocation}&key=${GOOGLE_MAPS_API_KEY}`,
            )
                .then((response) => response.json())
                .then((data) => {
                    if (data.results.length > 0) {
                        const { lat, lng } = data.results[0].geometry.location;
                        setMapCenter({ lat, lng });
                    }
                })
                .catch((error) => {
                    console.error('Error fetching geocode data:', error);
                });
        }
    }, [selectedLocation]);

    const handleOpen = (location, distributor) => {
        setSelectedLocation(location);
        setSelectedDistributor(distributor);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedLocation(null);
        setSelectedDistributor(null);
    };

    return (
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {SEARCH_STORE_TABLE_HEAD.map((head) => (
                            <th
                                key={head}
                                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                            >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {stores.map(({ distributer, tel, location }, index) => (
                        <tr key={index}>
                            <td className="p-4 border-b border-blue-gray-50">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {distributer}
                                </Typography>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {tel}
                                </Typography>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {location}
                                </Typography>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <IconButton
                                    variant="outlined"
                                    color="blue-gray"
                                    onClick={() => handleOpen(location, distributer)}
                                >
                                    <LocationOnIcon className="h-5 w-5" />
                                </IconButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <StoreDialog
                open={open}
                handleClose={handleClose}
                center={mapCenter}
                distributor={selectedDistributor}
                location={selectedLocation}
            />
        </LoadScript>
    );
}
