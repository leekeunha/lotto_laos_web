import React, { useState, useEffect } from 'react';
import { Typography, IconButton } from '@material-tailwind/react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { LoadScript } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY, SEARCH_STORE_TABLE_HEAD } from '../../utils/constants';
import StoreDialog from './SearchStoreDialog';
import { useQuery } from '@tanstack/react-query';
import { useGoogleMapService } from '../../store/useGoogleMapService';

// GoogleMapService 인스턴스를 생성합니다.

export default function SearchStoreTable({ stores }) {
    const [open, setOpen] = useState(false);
    const [selectedDistributor, setSelectedDistributor] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 }); // 초기 좌표 설정
    const { googleMapService } = useGoogleMapService();
    // 선택된 위치가 변경될 때마다 Google Maps API를 호출하여 좌표를 가져옵니다.
    const { data: coordinates } = useQuery({
        queryKey: ['geocode', selectedLocation],
        queryFn: () => googleMapService.getCoordinates(selectedLocation),
        enabled: !!selectedLocation, // selectedLocation이 있을 때만 쿼리를 실행합니다.
        staleTime: 1000 * 60 * 5, // 5분 동안 데이터를 신선하게 유지합니다.
    });

    // coordinates가 변경될 때 mapCenter를 업데이트합니다.
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
