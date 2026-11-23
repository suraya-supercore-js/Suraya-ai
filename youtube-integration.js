// youtube-integration.js — client-side helper for admin UI
// Provides a small wrapper to fetch channel statistics via YouTube Data API v3.

const YouTubeIntegration = (function(){
  async function fetchChannelStats(apiKey, channelId){
    if(!apiKey) throw new Error('API key required');
    if(!/^UC[A-Za-z0-9_-]{22}$/.test(channelId)) throw new Error('Invalid YouTube channel ID');
    const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${encodeURIComponent(channelId)}&key=${encodeURIComponent(apiKey)}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
    if(!res.ok) {
      throw new Error('YouTube API request failed with HTTP ' + res.status);
    }
    const data = await res.json();
    if(!data.items || data.items.length === 0) throw new Error('Channel not found');
    const item = data.items[0];
    return {
      title: item.snippet.title,
      description: item.snippet.description,
      viewCount: item.statistics.viewCount || 0,
      subscriberCount: item.statistics.subscriberCount || 0,
      videoCount: item.statistics.videoCount || 0
    };
  }

  return { fetchChannelStats };
})();

window.YouTubeIntegration = YouTubeIntegration;
