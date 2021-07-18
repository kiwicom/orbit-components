import React from "react";
import { Stack } from "@kiwicom/orbit-components";
import styled from "styled-components";
import { Dribbble, Github } from "@icons-pack/react-simple-icons";
import { Twitter, Link as LinkIcon } from "@kiwicom/orbit-components/icons";

import { Member } from "./OrbitTeam";

const StyledHeading = styled.h4`
  color: ${({ theme }) => theme.orbit.headingForeground};
  font-size: calc(1em + 2px);
  font-weight: ${({ theme }) => theme.orbit.fontWeightBold};
  width: 100%;
  line-height: 1.2;
`;

const StyledLink = styled.a.attrs(() => ({
  rel: "noopener noreferrer",
  target: "_blank",
}))`
  svg {
    height: 16px;
    width: 16px;
  }
`;

const StyledInfo = styled.div`
  height: 100%;
  color: ${({ theme }) => theme.orbit.textPrimaryForeground};
`;

interface Props extends Member {
  image: React.ReactNode;
}

const TeamMember = ({ position, info, name, twitter, website, dribbble, github, image }: Props) => {
  const links = [
    { url: twitter, icon: <Twitter /> },
    { url: website, icon: <LinkIcon /> },
    { url: dribbble, icon: <Dribbble /> },
    { url: github, icon: <Github /> },
  ];

  return (
    <Stack
      inline
      direction="column"
      spacing="large"
      align="center"
      largeMobile={{ direction: "row", align: "stretch" }}
    >
      {image}
      <Stack flex shrink direction="column" spacing="medium">
        <StyledHeading>
          {name}, {position}
        </StyledHeading>
        <StyledInfo>{info}</StyledInfo>
        <Stack inline spacing="medium">
          {links.map(({ icon, url }) => {
            return (
              url && (
                <StyledLink key={url} href={url}>
                  {icon}
                </StyledLink>
              )
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TeamMember;
