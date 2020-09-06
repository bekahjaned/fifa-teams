import React from "react";
import "./index.css";

import { ContentWrap } from "../../Elements/ContentWrap/";
import { Footer } from "../../Elements/Footer/";

import Hero from "../../Components/Hero/";
import Main from "../../Components/Main/";

function App() {
  return (
    <ContentWrap>
      <Hero />
      <Main />
      <Footer>
        <a
          className="bmc-button"
          href="https://www.buymeacoffee.com/mannyandrebekah"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
            alt="Buy us a coffee"
          />
          <span>Buy us a coffee?</span>
        </a>
      </Footer>
    </ContentWrap>
  );
}

export default App;
