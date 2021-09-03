import React from "react";
import "../index.css";

import { ContentWrap } from "../../Elements/ContentWrap/";

import Hero from "../../Components/Hero/";
import Main from "../../Components/Main/";

function Home() {
  return (
    <ContentWrap>
      <Hero />
      <Main />
    </ContentWrap>
  );
}

export default Home;
