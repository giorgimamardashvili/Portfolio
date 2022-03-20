import React from "react";
import styled from "styled-components";

const Project = (props) => {
  return (
    <Container>
      <Item>
        <img
          src={props.img}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Black
          className="black"
          style={{
            background: "rgba(0,0,0, 0.5)",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            left: "0",
          }}
        ></Black>
        <Button
          className="button"
          style={{
            position: "absolute",
            width: "55%",
            height: "30%",
            background: "white",
            top: "50%",
            left: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12px",
            transform: "translate(-50%, -50%)",
          }}
        >
          Learn more
        </Button>
      </Item>
      <p style={{ color: "white", textAlign: "center" }}>{props.title}</p>
    </Container>
  );
};

const Container = styled.div``;
const Item = styled.div`
  aspect-ratio: 2 / 1.3;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  margin-bottom: 5px;
`;
const Button = styled.a`
  opacity: 0;
  cursor: pointer;
  ${Container}:hover & {
    opacity: 1;
  }
`;
const Black = styled.div`
  opacity: 0;
  ${Container}:hover & {
    opacity: 1;
  }
`;

export default Project;
