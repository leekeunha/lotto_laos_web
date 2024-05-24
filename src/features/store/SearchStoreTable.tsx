import React, { useState, useEffect } from 'react';
import { Typography, IconButton } from '@material-tailwind/react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { LoadScript } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY, SEARCH_STORE_TABLE_HEAD } from '../../utils/constants';
import StoreDialog from './SearchStoreDialog';
import { useQuery } from '@tanstack/react-query';
import { useGoogleMapService } from '../../store/useGoogleMapService';

export default function SearchStoreTable({ stores }) {
    const [open, setOpen] = useState(false);
    const [selectedDistributor, setSelectedDistributor] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
    const { googleMapService } = useGoogleMapService();

    const { data: coordinates } = useQuery({
        queryKey: ['geocode', selectedLocation],
        queryFn: () => googleMapService.getCoordinates(selectedLocation),
        enabled: !!selectedLocation,
        staleTime: 1000 * 60 * 5,
    });

    useEffect(() => {
        if (coordinates) {
            setMapCenter(coordinates);
        }
    }, [coordinates]);

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
