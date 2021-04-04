import React, { useState } from "react";
import { subMinutes } from "date-fns";
import styled from "styled-components";
import Navigation, {
  NavigationUl,
  NavigationLi,
} from "@bbc/psammead-navigation";
import {
  DropdownUl,
  DropdownLi,
  CanonicalDropdown,
  CanonicalMenuButton,
} from "@bbc/psammead-navigation/dropdown";
import { cyrillicAndLatin } from "@bbc/gel-foundations/scripts";
import { ScrollableNavigation } from "@bbc/psammead-navigation/scrollable";

const ScrollableWrapper = styled.div`
  position: relative;
`;

const navigation = [
  {
    url: "https://github.com/thekp",
    title: "Github",
  },
  {
    url: "https://www.linkedin.com/in/thekp",
    title: "LinkedIn",
  },
  {
    url: "https://www.youtube.com/channel/UC3x2EUTBpIyuyXQFTknV6Zg/",
    title: "YouTube",
  },
  {
    url: "https://twitter.com/thekp_97",
    title: "Twitter",
  },
  { url: "https://www.strava.com/athletes/42334696", title: "Strava" },
];

const renderListItems = (NavListItem) =>
  navigation.map((item) => {
    const { title, url } = item;

    return (
      <NavListItem
        key={title}
        url={url}
        script={cyrillicAndLatin}
        service="news"
      >
        {title}
      </NavListItem>
    );
  });

const NavigationContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollableListItems = (
    <NavigationUl>{renderListItems(NavigationLi)}</NavigationUl>
  );

  const dropdownListItems = (
    <DropdownUl>{renderListItems(DropdownLi)}</DropdownUl>
  );

  return (
    <Navigation script={cyrillicAndLatin} service={"news"} isOpen={isOpen}>
      <ScrollableWrapper>
        <CanonicalMenuButton
          announcedText="Navigation"
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          script={cyrillicAndLatin}
        />
        {!isOpen && (
          <ScrollableNavigation>{scrollableListItems}</ScrollableNavigation>
        )}
      </ScrollableWrapper>
      <CanonicalDropdown isOpen={isOpen}>{dropdownListItems}</CanonicalDropdown>
    </Navigation>
  );
};

export default NavigationContainer;
