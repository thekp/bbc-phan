import { gql } from "@apollo/client";

export const typeDefs = gql`
  type YouTubeVideoItemStatistics {
    viewCount: String
    likeCount: String
    dislikeCount: String
    favoriteCount: String
    commentCount: String
  }

  type YouTubeVideoItemSnippet {
    publishedAt: String!
    channelId: String!
    title: String!
    description: String!
    channelTitle: String!
    tags: [String]
  }

  type YouTubeVideoItem {
    kind: String!
    etag: String!
    id: String!
    snippet: YouTubeVideoItemSnippet!
    statistics: YouTubeVideoItemStatistics
  }

  type YouTubeVideosResponse {
    kind: String!
    etag: String!
    id: String!
    items: [YouTubeVideoItem]!
  }

  type StravaActivityMap {
    id: String
    summary_polyline: String!
  }

  type StravaActivityResponse {
    id: Float!
    resource_state: String
    name: String!
    distance: Float!
    moving_time: Float!
    elapsed_time: Float!
    total_elevation_gain: Float!
    type: String!
    start_date: String
    start_date_local: String
    timezone: String
    start_latlng: [Float]
    end_latlng: [Float]
    start_latitude: Float
    start_longitude: Float
    achievement_count: Float
    kudos_count: Float
    comment_count: Float
    athlete_count: Float
    photo_count: Float
    map: StravaActivityMap
    average_speed: Float
    max_speed: Float
  }

  type Query {
    LikedYouTubeVideos: YouTubeVideosResponse
    DislikedYouTubeVideos: YouTubeVideosResponse
    StravaActivities: [StravaActivityResponse]
  }
`;
