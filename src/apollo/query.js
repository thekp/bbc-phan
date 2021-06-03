import gql from "graphql-tag";

export const FrontPageData = gql`
  query Data {
    StravaActivities {
      id
      resource_state
      name
      distance
      moving_time
      elapsed_time
      total_elevation_gain
      type
      start_date
      start_date_local
      timezone
      start_latlng
      end_latlng
      start_latitude
      start_longitude
      achievement_count
      kudos_count
      map {
        id
        summary_polyline
      }
      average_speed
      max_speed
    }
    LikedYouTubeVideos {
      items {
        id
        snippet {
          publishedAt
          channelId
          title
          description
          channelTitle
          tags
        }
      }
    }
    DislikedYouTubeVideos {
      items {
        id
        snippet {
          publishedAt
          channelId
          title
          description
          channelTitle
          tags
        }
      }
    }
    TwitterLikes {
      id
      text
    }
  }
`;
