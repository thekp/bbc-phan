import React from "react";
import styled from "styled-components";

import {
  MostReadList,
  MostReadItemWrapper,
  MostReadLink,
  MostReadRank,
} from "@bbc/psammead-most-read";
import Paragraph from "@bbc/psammead-paragraph";
import Timestamp from "@bbc/psammead-timestamp-container";
import SectionLabel from "@bbc/psammead-section-label";
import { latin } from "@bbc/gel-foundations/scripts";

const SectionContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const ExtSectionLabel = styled(SectionLabel)`
  margin-bottom: 0 !important;
`;

const ExtParagraph = styled(Paragraph)`
  padding-bottom: 0 !important;
  font-size: 0.875rem !important;
  line-height: 1.125rem !important;
  color: #6e6e73 !important;
`;

const RankWrapper = styled.div`
  span {
    color: ${({ rankColour }) => rankColour};
  }
`;

const Ranking = ({ data, columnLayout, title, rankColour }) => (
  <>
    <SectionContainer>
      <ExtSectionLabel script={latin} dir="ltr" labelId={title} service="news">
        {title}
      </ExtSectionLabel>
    </SectionContainer>

    <MostReadList
      numberOfItems={data.items.length}
      service="news"
      script={latin}
      dir="ltr"
      columnLayout={columnLayout}
    >
      {data.items.map(
        (
          { id, snippet: { title: videoName, channelTitle, publishedAt } },
          index
        ) => (
          <MostReadItemWrapper
            dir="ltr"
            columnLayout={columnLayout}
            key={id || videoName}
          >
            <RankWrapper rankColour={rankColour}>
              <MostReadRank
                service="vietnamese"
                script={latin}
                listIndex={index + 1}
                numberOfItems={10}
                dir="ltr"
                columnLayout={columnLayout}
              />
            </RankWrapper>

            <MostReadLink
              dir="ltr"
              href={`https://www.youtube.com/watch?v=${id}`}
              service="news"
              script={latin}
              title={videoName}
            >
              <ExtParagraph script={latin} service="news">
                Channel: {channelTitle}
              </ExtParagraph>
              <Timestamp
                timestamp={publishedAt} // most recent publishedAt value
                dateTimeFormat="YYYY-MM-DD"
                prefix={`Video Released: `}
                format="LL"
                script={latin}
                service="news"
                padding={false}
              />
            </MostReadLink>
          </MostReadItemWrapper>
        )
      )}
    </MostReadList>
  </>
);

export default Ranking;
