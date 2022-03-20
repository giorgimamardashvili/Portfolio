import React from "react";
import styled from "styled-components";
import Project from "../components/Project";

const Portfolio = () => {
  return (
    <div
      style={{
        flexGrow: "1",
        height: "100%",
        padding: "10%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "375px",
      }}
    >
      <h1 style={{ fontSize: "36px", color: "white" }}>Portfolio</h1>
      <span
        style={{ fontSize: "18px", color: "#C9C9BC", marginBottom: "50px" }}
      >
        See my work below
      </span>
      <Container>
        <Project
          img="https://profsystems.ge/uploads/informations/834531617364621.jpg"
          title="title"
        />
        <Project
          img="https://profsystems.ge/uploads/informations/834531617364621.jpg"
          title="title"
        />
        <Project
          img="https://profsystems.ge/uploads/informations/834531617364621.jpg"
          title="title"
        />
        <Project
          img="https://profsystems.ge/uploads/informations/834531617364621.jpg"
          title="title"
        />
        <Project
          img="https://profsystems.ge/uploads/informations/834531617364621.jpg"
          title="title"
        />
        <Project
          img="https://profsystems.ge/uploads/informations/834531617364621.jpg"
          title="title"
        />
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;
`;

export default Portfolio;
