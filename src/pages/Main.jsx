import React from "react";
import styled from "styled-components";

const main = () => {
  return (
    <Container>
      <div>
        <h1 style={{ fontSize: "48px", color: "white" }}>Hi, i’m George,</h1>
        <p style={{ fontSize: "24px", color: "#C9C9BC" }}>
          Software Engineer specialized in <br />
          <span style={{ fontSize: "inherit", color: "white" }}>
            Front-end{" "}
          </span>
          development
        </p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  flex-grow: 1;
  height: 100%;
  padding: 10%;
  margin-left: 375px;
`;
export default main;
