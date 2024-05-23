import React, { useState, useEffect } from 'react';
import {
    Typography,
    Button,
    IconButton,
    Dialog,
    DialogBody,
    DialogFooter,
} from '@material-tailwind/react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import { SEARCH_STORE_TABLE_HEAD } from '../../constants';

const containerStyle = {
    width: '400px',
    height: '400px',
};

const defaultCenter = {
    lat: 37.7749, // 예시로 샌프란시스코의 위도 경도를 사용
    lng: -122.4194,
};

function Map({ center }) {
    return (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
            <Marker position={center} />
        </GoogleMap>
    );
}

export default function SearchStoreTable({ stores }) {
    const [open, setOpen] = useState(false);
    const [selectedDistributor, setSelectedDistributor] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [mapCenter, setMapCenter] = useState(defaultCenter);

    useEffect(() => {
        if (selectedLocation) {
            fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?address=${selectedLocation}&key=AIzaSyAcP2PHO1tdFQ4LfL99B92C7q7KCE6GA_s`,
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
        <LoadScript googleMapsApiKey="AIzaSyAcP2PHO1tdFQ4LfL99B92C7q7KCE6GA_s">
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
                    {stores &&
                        stores.map(({ distributer, tel, location }, index) => {
                            const isLast = index === stores.length - 1;
                            const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

                            return (
                                <tr key={index}>
                                    <td className={classes}>
                                        <div className="flex items-center gap-3">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {distributer}
                                            </Typography>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {tel}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {location}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <IconButton
                                            variant="outlined"
                                            color="blue-gray"
                                            onClick={() => handleOpen(location, distributer)}
                                        >
                                            <LocationOnIcon className="h-5 w-5" />
                                        </IconButton>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>

            <Dialog open={open} handler={handleClose} size="sm">
                <DialogBody className="flex flex-col items-center justify-center text-center">
                    {selectedLocation && <Map center={mapCenter} />}
                    {selectedDistributor && (
                        <Typography variant="paragraph" color="blue-gray" className="mt-4">
                            Distributer: {selectedDistributor}
                        </Typography>
                    )}
                    {selectedLocation && (
                        <Typography variant="paragraph" color="blue-gray">
                            Location: {selectedLocation}
                        </Typography>
                    )}
                </DialogBody>
                <DialogFooter>
                    <Button color="red" onClick={handleClose}>
                        Close
                    </Button>
                </DialogFooter>
            </Dialog>
        </LoadScript>
    );
}
