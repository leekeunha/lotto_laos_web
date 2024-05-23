import { useState, useEffect } from 'react';

export default function useGeocode(address, apiKey) {
    const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

    useEffect(() => {
        if (address) {
            fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`,
            )
                .then((response) => response.json())
                .then((data) => {
                    if (data.results.length > 0) {
                        const { lat, lng } = data.results[0].geometry.location;
                        setCoordinates({ lat, lng });
                    }
                })
                .catch((error) => {
                    console.error('Error fetching geocode data:', error);
                });
        }
    }, [address, apiKey]);

    return coordinates;
}
