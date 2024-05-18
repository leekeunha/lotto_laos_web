import create from 'zustand';
import YoutubeClient from './api/youtubeClient';
import xxxApiClient from './api/xxxApiClient';

export default const useStore = create(set=>{
    YoutubeClient: new YoutubeClient(),
    xxxApiClient: new xxxApiClient(),
});

