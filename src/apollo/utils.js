const fetch = require("node-fetch");
const { URLSearchParams } = require("url");

module.exports.getYouTubeAccessToken = async () => {
  const params = new URLSearchParams();
  params.append("client_id", process.env.YOUTUBE_CLIENT_ID);
  params.append("client_secret", process.env.YOUTUBE_CLIENT_SECRET);
  params.append("refresh_token", process.env.YOUTUBE_REFRESH_TOKEN);
  params.append("grant_type", "refresh_token");

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "post",
    body: params,
  });

  const data = await res.json();

  return data.access_token;
};

module.exports.getStravaAccessToken = async () => {
  const params = new URLSearchParams();
  params.append("client_id", process.env.STRAVA_CLIENT_ID);
  params.append("client_secret", process.env.STRAVA_CLIENT_SECRET);
  params.append("refresh_token", process.env.STRAVA_REFRESH_TOKEN);
  params.append("grant_type", "refresh_token");

  const res = await fetch("https://www.strava.com/oauth/token", {
    method: "post",
    body: params,
  });

  const data = await res.json();

  return data.access_token;
};
