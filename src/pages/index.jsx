import React from "react";
import { Helmet } from "react-helmet";

import dynamic from "next/dynamic";
import { useQuery } from "@apollo/client";

import { initializeApollo } from "../apollo/client";
import Layout from "../components/layout";
import TopStory from "../components/TopStory";
import { FrontPageData } from "../apollo/query";

const Ranking = dynamic(() => import("../components/Ranking"));
const StravaMap = dynamic(() => import("../components/StravaMap"));
const TwitterLikes = dynamic(() => import("../components/TwitterLikes"));

const IndexPage = () => {
  const {
    data: {
      StravaActivities: activitiesData,
      LikedYouTubeVideos: likeData,
      DislikedYouTubeVideos: dislikeData,
      TwitterLikes: twitterLikes,
    },
  } = useQuery(FrontPageData);

  return (
    <>
      <Helmet>
        <meta property="og:image" content="/og/ktpLogo.png" />
        <meta property="og:image:alt" content="KTP News logo" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="TheKP" />
        <meta property="og:title" content="The KP News" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thekp.dev" />
      </Helmet>
      <Layout>
        <TopStory />
        <StravaMap activityData={activitiesData[0]} />
        <TwitterLikes twitterLikes={twitterLikes} />
        <Ranking
          data={likeData}
          columnLayout="twoColumn"
          title="Recently 👍 videos"
          rankColour="green"
        />
        <Ranking
          data={dislikeData}
          columnLayout="twoColumn"
          title="Recently 👎 videos"
        />
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: FrontPageData,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default IndexPage;
