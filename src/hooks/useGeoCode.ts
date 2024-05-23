// import { useState, useEffect } from 'react';
// import { GOOGLE_MAPS_API_KEY } from '../utils/constants';

// export default function useGeocode(address) {
//     const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

//     useEffect(() => {
//         if (address) {
//             fetch(
//                 `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GOOGLE_MAPS_API_KEY}`,
//             )
//                 .then((response) => response.json())
//                 .then((data) => {
//                     if (data.results.length > 0) {
//                         const { lat, lng } = data.results[0].geometry.location;
//                         setCoordinates({ lat, lng });
//                     }
//                 })
//                 .catch((error) => {
//                     console.error('Error fetching geocode data:', error);
//                 });
//         }
//     }, [address]);

//     return coordinates;
// }
