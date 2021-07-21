// @flow
import * as React from "react";
import styled from "styled-components";

import Card, { CardSection } from "../Card";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Layout, { LayoutColumn } from ".";

const CustomDiv = styled.div`
  height: 400px;
  background: rgba(0, 169, 145, 0.2);
`;

export default {
  title: "Layout",
};

export const Search = (): React.Node => (
  <Layout type="Search">
    <LayoutColumn>
      <Card>
        <CardSection>
          <CustomDiv />
        </CardSection>
      </Card>
    </LayoutColumn>
    <LayoutColumn>
      <Card>
        <CardSection>
          <CustomDiv />
        </CardSection>
      </Card>
    </LayoutColumn>
    <LayoutColumn>
      <Card>
        <CardSection>
          <CustomDiv />
        </CardSection>
      </Card>
    </LayoutColumn>
  </Layout>
);

export const Booking = (): React.Node => {
  return (
    <Layout type="Booking">
      <LayoutColumn>
        <Card>
          <CardSection>
            <CustomDiv />
          </CardSection>
        </Card>
      </LayoutColumn>
      <LayoutColumn>
        <Card>
          <CardSection>
            <CustomDiv />
          </CardSection>
        </Card>
      </LayoutColumn>
    </Layout>
  );
};

export const Mmb = (): React.Node => {
  return (
    <Layout type="MMB">
      <LayoutColumn>
        <Card>
          <CardSection>
            <CustomDiv />
          </CardSection>
        </Card>
      </LayoutColumn>
    </Layout>
  );
};

Mmb.story = {
  name: "MMB",
};

export const Customized = (): React.Node => (
  <Layout type="Search">
    <LayoutColumn dataTest="test" as="span">
      <Card>
        <CardSection>
          <CustomDiv />
        </CardSection>
      </Card>
    </LayoutColumn>
    <LayoutColumn hideOn={["largeMobile"]} as="span">
      <Card>
        <CardSection>
          <CustomDiv />
        </CardSection>
      </Card>
    </LayoutColumn>
    <LayoutColumn>
      <Card>
        <CardSection>
          <CustomDiv />
        </CardSection>
      </Card>
    </LayoutColumn>
  </Layout>
);

export const Rtl = (): React.Node => (
  <RenderInRtl>
    <Layout type="Search">
      <LayoutColumn>
        <Card>
          <CardSection>
            <CustomDiv>First</CustomDiv>
          </CardSection>
        </Card>
      </LayoutColumn>
      <LayoutColumn>
        <Card>
          <CardSection>
            <CustomDiv>Second</CustomDiv>
          </CardSection>
        </Card>
      </LayoutColumn>
      <LayoutColumn>
        <Card>
          <CardSection>
            <CustomDiv>Third</CustomDiv>
          </CardSection>
        </Card>
      </LayoutColumn>
    </Layout>
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",
};
