import React from "react";
import styled from "styled-components";
import bgImage from "../assets/imgs/background.jpg";
import profileImg from "../assets/imgs/profile.png";
import Rightside from "./Rightside";
import CustomLink from "./CustomLink";
import git from "../assets/imgs/github.svg";
import linkden from "../assets/imgs/linkden.svg";
import facebook from "../assets/imgs/facebook.svg";

const Layout = () => {
  return (
    <Background className="App">
      <Leftside>
        <ProfileInfo>
          <ProfileImg src={profileImg} />
          <ProfileName>George Mamardashvili</ProfileName>
          <ProfileJob>Front-end developer</ProfileJob>
        </ProfileInfo>
        <ProfileNav>
          <CustomLink to="/mywebpage/portfolio">PORTFOLIO</CustomLink>
          <CustomLink to="/mywebpage/cv">CV</CustomLink>
          <CustomLink to="/mywebpage/contact">CONTACT</CustomLink>
        </ProfileNav>
        <ProfileContact>
          <p style={{ color: "white", marginBottom: "12px" }}>Get in touch:</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <ProfileLink href="http://">
              <img src={git} alt="" />
            </ProfileLink>
            <ProfileLink href="http://">
              <img src={linkden} alt="" />
            </ProfileLink>
            <ProfileLink href="http://">
              <img src={facebook} alt="" />
            </ProfileLink>
          </div>
        </ProfileContact>
      </Leftside>
      <Rightside />
    </Background>
  );
};

const Background = styled.div`
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
`;
const Leftside = styled.section`
  width: 375px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(57, 14, 14, 0.65);
  padding: 70px 35px;
  flex-shrink: 0;
  position: fixed;
`;
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const ProfileName = styled.p`
  font-size: 24px;
  color: white;
`;
const ProfileJob = styled.span`
  font-size: 18px;
  color: #b0b0b0;
`;
const ProfileNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
const ProfileImg = styled.img``;
const ProfileLink = styled.a`
  margin-right: 12px;
`;
const ProfileContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
`;

export default Layout;
