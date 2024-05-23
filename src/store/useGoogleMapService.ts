import { create } from 'zustand';
import GoogleMapClient from '../httpClient/GoogleMapClient';
import { GoogleMapService } from '../services/GoogleMapService';

export const useGoogleMapService = create(() => {
    const client = new GoogleMapClient();
    const googleMapService = new GoogleMapService(client);
    return {
        googleMapService,
    };
});
