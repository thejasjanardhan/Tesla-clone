import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delevery"
        backgroundimg="model-s.jpg"
        leftBtntext="Custom Order"
        rightBtntext="Existing Inventory"
        src="/images/down-arrow.svg"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delevery"
        backgroundimg="model-y.jpg"
        leftBtntext="Custom Order"
        rightBtntext="Existing Inventory"
      />

      <Section
        title="Model 3"
        description="Order Online for Touchless Delevery"
        backgroundimg="model-3.jpg"
        leftBtntext="Custom Order"
        rightBtntext="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delevery"
        backgroundimg="model-x.jpg"
        leftBtntext="Custom Order"
        rightBtntext="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panel in India"
        description="Money-back guarantee"
        backgroundimg="solar-panel.jpg"
        leftBtntext="Order now"
        rightBtntext="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Cost Less Than a New Roof Plus Solar Panels"
        backgroundimg="solar-roof.jpg"
        leftBtntext="Order now"
        rightBtntext="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundimg="accessories.jpg"
        leftBtntext="Shop now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div``;
