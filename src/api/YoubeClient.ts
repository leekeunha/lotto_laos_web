import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const youtubeApiClient = axios.create({
  baseURL: BASE_URL,
  params: { key: API_KEY },
});

export const searchVideos = async (keyword) => {
  const params = {
    part: 'snippet',
    maxResults: 25,
    type: 'video',
    q: keyword,
  };
  const response = await youtubeApiClient.get('search', { params });
  return response.data.items.map((item) => ({ ...item, id: item.id.videoId }));
};

export const getMostPopularVideos = async () => {
  const params = {
    part: 'snippet',
    maxResults: 25,
    chart: 'mostPopular',
  };
  const response = await youtubeApiClient.get('videos', { params });
  return response.data.items;
};

export const getChannelImageURL = async (id) => {
  const params = {
    part: 'snippet',
    id,
  };
  const response = await youtubeApiClient.get('channels', { params });
  return response.data.items[0].snippet.thumbnails.default.url;
};

export const getRelatedVideos = async (id) => {
  const params = {
    part: 'snippet',
    maxResults: 25,
    type: 'video',
    relatedToVideoId: id,
  };
  const response = await youtubeApiClient.get('search', { params });
  return response.data.items.map((item) => ({ ...item, id: item.id.videoId }));
};
