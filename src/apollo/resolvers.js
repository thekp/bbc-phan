import axios from "axios";

import { getYouTubeAccessToken, getStravaAccessToken } from "./utils";

const youtubeKey = process.env.YOUTUBE_KEY;

export const resolvers = {
  Query: {
    LikedYouTubeVideos: async () => {
      const youTubeToken = await getYouTubeAccessToken();

      const { data } = await axios({
        method: "get",
        headers: { Authorization: `Bearer ${youTubeToken}` },
        url: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=10&myRating=like&key=${youtubeKey}`,
      });

      return data;
    },
    DislikedYouTubeVideos: async () => {
      const youTubeToken = await getYouTubeAccessToken();

      const { data } = await axios({
        method: "get",
        headers: { Authorization: `Bearer ${youTubeToken}` },
        url: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=10&myRating=dislike&key=${youtubeKey}`,
      });

      return data;
    },
    StravaActivities: async () => {
      const stravaToken = await getStravaAccessToken();

      const { data } = await axios({
        method: "get",
        headers: { Authorization: `Bearer ${stravaToken}` },
        url: "https://www.strava.com/api/v3/athlete/activities",
      });

      return data;
    },
    TwitterLikes: async () => {
      const twitterAuthToken = process.env.TWITTER_AUTH_TOKEN;

      const {
        data: { data },
      } = await axios({
        method: "get",
        headers: { Authorization: `Bearer ${twitterAuthToken}` },
        url: "https://api.twitter.com/2/users/1222919210700955649/liked_tweets",
      });

      return data;
    },
  },
};
