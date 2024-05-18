// Youtube.js
export default class Youtube {
    constructor(apiClient) {
      this.apiClient = apiClient;
    }
  
    async searchVideos(keyword) {
      const params = keyword ? { part: "snippet", maxResults: 25, type: "video", q: keyword }
                             : { part: "snippet", maxResults: 25, chart: "mostPopular" };
      const response = await this.apiClient.search(params);
      return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
    }
  
    async getChannelImageURL(id) {
      const response = await this.apiClient.channels({ part: "snippet", id });
      return response.data.items[0].snippet.thumbnails.default.url;
    }
  
    async getRelatedVideos(id) {
      const response = await this.apiClient.search({
        part: "snippet",
        maxResults: 25,
        type: "video",
        relatedToVideoId: id,
      });
      return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
    }
  }
  