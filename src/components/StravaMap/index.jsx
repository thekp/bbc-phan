import { Head } from "next/document";
import React, { useEffect } from "react";
import polyUtil from "polyline-encoded";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

import Image from "@bbc/psammead-image";
import ImagePlaceholder from "@bbc/psammead-image-placeholder";
import { latin } from "@bbc/gel-foundations/scripts";
import StoryPromo, { Headline, Summary, Link } from "@bbc/psammead-story-promo";
import Paragraph from "@bbc/psammead-paragraph";
import Timestamp from "@bbc/psammead-timestamp-container";
import SectionLabel from "@bbc/psammead-section-label";

const findMedian = (values) => {
  if (values.length === 0) return 0;

  const newValues = values.slice().sort((a, b) => {
    const sumA = a[0] + a[1];
    const sumbB = b[0] + b[1];

    return sumA - sumbB;
  });

  const half = Math.floor(values.length / 2);

  console.log(newValues[half]);

  return newValues[half];
};

const SectionContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const ExtSectionLabel = styled(SectionLabel)`
  margin-bottom: 0 !important;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
`;

const SummaryOverride = styled(Summary)`
  @media (max-width: 62.9375rem) and (min-width: 37.5rem) {
    display: block;
    visibility: visible;
  }
`;

const StyledLi = styled.li`
  border-top: 1px solid rgb(242, 242, 242);
  padding: 0.5rem 0px;
`;

const StravaMap = ({ activityData }) => {
  const {
    id,
    name,
    distance,
    type,
    moving_time,
    max_speed,
    average_speed,
    total_elevation_gain,
    start_latlng,
    end_latlng,
    map,
    start_date,
    kudos_count,
    achievement_count,
  } = activityData;

  const randomThings = [
    `Distance: ${(Number(distance) * 0.000621371192).toFixed(2)}mi`,
    `Moving Time: ${
      Math.floor(moving_time / 60 / 60) !== 0
        ? Math.floor(moving_time / 60 / 60) + "h"
        : ""
    } ${
      Math.floor(moving_time / 60) - Math.floor(moving_time / 60 / 60) * 60
    }m ${moving_time % 60}s`,
    `Average Speed: ${(
      Number(average_speed) *
      (60 * 60) *
      0.000621371192
    ).toFixed(2)}mph`,
    `Max Speed: ${(Number(max_speed) * (60 * 60) * 0.000621371192).toFixed(
      2
    )}mph`,
    `Kudos: ${kudos_count}`,
    `Achievements: ${achievement_count}`,
  ];

  const getInfo = () => (
    <>
      <Headline
        script={latin}
        promoType="top"
        service="news"
        promoHasImage={true}
      >
        {name}
      </Headline>
      <SummaryOverride
        script={latin}
        promoType="top"
        service="news"
        promoHasImage={true}
      >
        <Timestamp
          timestamp={start_date}
          dateTimeFormat="YYYY-MM-DD"
          prefix={`Published: `}
          format="LL"
          script={latin}
          service="news"
          padding={true}
        />
      </SummaryOverride>
      <StyledUl>
        {randomThings.map((thing) => (
          <StyledLi key={thing}>
            <SummaryOverride
              script={latin}
              promoType="top"
              service="news"
              promoHasImage={true}
            >
              {thing}
            </SummaryOverride>
          </StyledLi>
        ))}
      </StyledUl>
    </>
  );

  useEffect(() => {
    const decodedPolyline = polyUtil.decode(map.summary_polyline);

    const midPoint = findMedian(decodedPolyline);

    let myMap = L.map("mapId").setView(midPoint, 12.5);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGhla3AiLCJhIjoiY2tqOHZrOWw2NTJyZzJ6bjRlOWFxdHl4NCJ9.FYGvRhH5k-t79ckky_OgEg",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
      }
    ).addTo(myMap);

    L.polyline(decodedPolyline, {
      color: "red",
      weight: "5",
      opacity: "0.7",
      lineJoin: "round",
    }).addTo(myMap);
  }, [activityData]);

  return (
    <>
      <SectionContainer>
        <ExtSectionLabel
          script={latin}
          dir="ltr"
          labelId={"Recent Strava Activity"}
          service="news"
        >
          Recent Strava Activity
        </ExtSectionLabel>
      </SectionContainer>

      <StoryPromo
        dir="ltr"
        image={
          <div id="mapId" style={{ height: "330px", width: "auto" }}></div>
        }
        info={getInfo()}
        promoType="top"
        displayImage={true}
        key={123}
      />
    </>
  );
};

export default StravaMap;
