import React from "react";
import styled from "styled-components";
import mail from "../assets/imgs/mail-black.svg";
import tel from "../assets/imgs/tel-black.svg";

const Cv = () => {
  return (
    <div
      style={{
        background: "white",
        padding: "5%",
        width: "100%",
        height: "100%",
        marginLeft: "375px",
        overflow: "auto",
      }}
    >
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ flexGrow: "2", padding: "10px" }}>
          <h2 style={{ padding: "5px", fontSize: "24px", color: "#C71A1A" }}>
            George mamardashvili
          </h2>
          <p style={{ padding: "5px" }}>
            Front-end developer with 2+ year experience{" "}
          </p>
        </div>
        <div
          style={{
            flexGrow: "1",
            padding: "10px",
            borderLeft: "3px solid black",
          }}
        >
          <InfoContainer>
            <img src={tel} alt="" style={{ padding: "5px" }} />
            <span>+995 555 106 902</span>
          </InfoContainer>
          <InfoContainer>
            <img src={mail} alt="" style={{ padding: "5px" }} />
            <span>eanjaparidze75@gmail.com</span>
          </InfoContainer>
        </div>
      </div>
      <hr
        style={{
          fontSize: "25px",
          border: "2px solid black",
          borderRadius: "15px",
          background: "black",
        }}
      />
      <div>
        <Cont>
          <Title>Skills</Title>
          <Title style={{ fontSize: "18px" }}>
            Knowledge and experience in:
          </Title>
          <ul>
            <Li>HTML / Pug</Li>
            <Li>CSS / SASS / SCSS / Styled-components</Li>
            <Li>JavaScript / Jquery</Li>
            <Li>Bootstrap / Tailwind CSS</Li>
            <Li>Gulp</Li>
            <Li>React / React Native</Li>
            <Li>Redux / Redux Toolkit</Li>
            <Li>Git</Li>
          </ul>
        </Cont>
        <Cont>
          <Title>Languages:</Title>
          <ul>
            <Li>Georgian - native</Li>
            <Li>English - B2</Li>
            <Li>Russian - fluent</Li>
          </ul>
        </Cont>
        <Cont>
          <Title>WORK EXPERIENCE</Title>
          <ul>
            <Li>
              SmartWeb
              <span
                style={{
                  fontSize: "14px",
                  marginLeft: "100px",
                  fontWeight: "400",
                }}
              >
                jan 2021 — Present
              </span>
            </Li>
          </ul>
        </Cont>
      </div>
    </div>
  );
};

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.h3`
  font-size: 24px;
  color: #51a167;
`;
const Li = styled.li`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
`;
const Cont = styled.div`
  padding: 5% 10%;
`;

export default Cv;
