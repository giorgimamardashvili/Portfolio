import React from "react";
import git from "../assets/imgs/github.svg";
import linkden from "../assets/imgs/linkden.svg";
import facebook from "../assets/imgs/facebook.svg";
import tel from "../assets/imgs/tel.svg";
import mail from "../assets/imgs/mail.svg";
import styled from "styled-components";

const Contact = () => {
  const [transform, setTransform] = React.useState("translateY(20px)");
  const [opacity, setOpacity] = React.useState("0");

  React.useEffect(() => {
    setTransform("translateY(0px)");
    setOpacity("1");
  }, []);
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: opacity,
          transform: transform,
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            color: "white",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Contact me
        </h1>
        <div
          style={{
            padding: "20px",
            borderRadius: "15px",
            background: "white",
            width: "fit-content",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "25px",
            }}
          >
            <img src={tel} alt="" style={{ marginRight: "15px" }} />
            <p>+995 555 106 902</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "25px",
            }}
          >
            <img src={mail} alt="" style={{ marginRight: "15px" }} />
            <p>eanjaparidze75@gmail.com</p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gridGap: "10px",
            }}
          >
            <Link>
              <img src={git} alt="" />
              <span>GitHub</span>
            </Link>
            <Link>
              <img src={facebook} alt="" />
              <span>facebook</span>
            </Link>
            <Link>
              <img src={linkden} alt="" />
              <span>linkedin</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export default Contact;
