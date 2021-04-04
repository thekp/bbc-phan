import React from "react";
import styled from "styled-components";
import Image from "@bbc/psammead-image";
import LazyLoad from "react-lazyload";
import ImagePlaceholder from "@bbc/psammead-image-placeholder";
import { latin } from "@bbc/gel-foundations/scripts";
import StoryPromo, { Headline, Summary, Link } from "@bbc/psammead-story-promo";

const SummaryOverride = styled(Summary)`
  @media (max-width: 62.9375rem) and (min-width: 37.5rem) {
    display: block;
    visibility: visible;
  }
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
`;

const StyledLi = styled.li`
  border-top: 1px solid rgb(242, 242, 242);
  padding: 0.5rem 0px;
`;

const getHeroImg = () => {
  const imageToRender = (
    <Image
      alt="Khoa Phan sipping coffee"
      src="./hero3-mobile.webp"
      width="640"
      height="auto"
    />
  );

  return (
    <ImagePlaceholder ratio={65.625}>
      <LazyLoad offset={250} once>
        {imageToRender}
      </LazyLoad>
      <noscript>{imageToRender}</noscript>
    </ImagePlaceholder>
  );
};

const randomThings = [
  "Spicy food eater 🍛, I'll do the Samyang Noodle challenge with no soy milk",
  "70% vegan for a year 🌱, the left over 30% is for a cheeky Nandos",
  "Audiobook listener 🎧, my favourite book so far has been Ready Player One",
  "Casual cyclist 🚴‍♂️, sorry if I'm causing traffic",
  "Amatuer gamer 🎮, I regularly let out steam on League of Legends",
];

const getInfo = () => (
  <>
    <Headline
      script={latin}
      promoType="top"
      service="news"
      promoHasImage={true}
    >
      Hello, I'm Khoa Thế Phan!
    </Headline>
    <SummaryOverride
      script={latin}
      promoType="top"
      service="news"
      promoHasImage={true}
    >
      I am a copying and pasting novice. This web app made out of BBC's open
      source component library, to render random things about myself for the
      world to view.
    </SummaryOverride>
    <StyledUl>
      {randomThings.map(thing => (
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

const TopStory = () => {
  return (
    <StoryPromo
      dir="ltr"
      image={getHeroImg()}
      info={getInfo()}
      promoType="top"
      displayImage={true}
      key={123}
    />
  );
};

export default TopStory;
