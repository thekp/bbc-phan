import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import styled from "styled-components";

import Paragraph from "@bbc/psammead-paragraph";
import Timestamp from "@bbc/psammead-timestamp-container";
import SectionLabel from "@bbc/psammead-section-label";
import { latin } from "@bbc/gel-foundations/scripts";
import { GEL_GROUP_2_SCREEN_WIDTH_MIN } from "@bbc/gel-foundations/breakpoints";

const SectionContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const ExtSectionLabel = styled(SectionLabel)`
  margin-bottom: 0 !important;
`;

const TweetContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  align-items: flex-start;
  grid-auto-flow: dense;
`;

const TwitterLikes = ({ twitterLikes }) => (
  <>
    <SectionContainer>
      <ExtSectionLabel
        script={latin}
        dir="ltr"
        labelId={"Recent Liked Tweets"}
        service="news"
        id={"recently-liked-tweets"}
      >
        Recent Liked Tweets
      </ExtSectionLabel>
    </SectionContainer>

    <TweetContainer>
      {twitterLikes.slice(0, 3).map((tweet, index) => (
        <TwitterTweetEmbed
          key={index}
          tweetId={tweet.id}
          options={{ cards: "hidden", width: 300 }}
          style={{ marginTop: 0 }}
        />
      ))}
    </TweetContainer>
  </>
);

export default TwitterLikes;
