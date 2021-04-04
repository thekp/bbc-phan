import axios from "axios";

import { getYouTubeAccessToken, getStravaAccessToken } from "./utils";
import secrets from "./secrets.json";

export const resolvers = {
  Query: {
    LikedYouTubeVideos: async () => {
      const youTubeToken = await getYouTubeAccessToken();

      const { data } = await axios({
        method: "get",
        headers: { Authorization: `Bearer ${youTubeToken}` },
        url: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=10&myRating=like&key=${secrets.youtube_key}`,
      });

      return data;
    },
    DislikedYouTubeVideos: async () => {
      const youTubeToken = await getYouTubeAccessToken();

      const { data } = await axios({
        method: "get",
        headers: { Authorization: `Bearer ${youTubeToken}` },
        url: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=10&myRating=dislike&key=${secrets.youtube_key}`,
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
  },
};
