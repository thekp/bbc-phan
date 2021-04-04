import React from "react";
import SitewideLinks from "@bbc/psammead-sitewide-links";
import Brand from "../Brand";

const currentYear = () => new Date().getFullYear();
const getCopyrightText = text => (
  <>
    <span lang="en-GB">{`\u00A9`} </span>
    {`${currentYear()} ${text}`}
  </>
);

const links = [
  {
    href: "https://github.com/thekp",
    text: "Github",
  },
  {
    href: "https://www.linkedin.com/in/khoa-p-5109a2a0/",
    text: "LinkedIn",
  },
  {
    href: "https://www.youtube.com/channel/UC3x2EUTBpIyuyXQFTknV6Zg/",
    text: "YouTube",
  },
  {
    href: "https://twitter.com/kappa_phan",
    text: "Twitter",
  },
  { href: "https://www.strava.com/athletes/42334696", text: "Strava" },
];

const externalLink = {
  href: "https://github.com/bbc/psammead",
  text:
    "This site was built using BBC's open source component library: Psammead.",
};

const FooterContainer = () => {
  return (
    <footer role="contentinfo" style={{ top: "0" }}>
      <Brand />
      <SitewideLinks
        links={links}
        copyrightText={getCopyrightText("Khoa Phan.")}
        externalLink={externalLink}
        service="news"
      />
    </footer>
  );
};

export default FooterContainer;
