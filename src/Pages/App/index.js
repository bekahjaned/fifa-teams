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
        <p>
          If you like this site and its contents, please support us by buying us
          a coffee. This way we can keep improving this page!
        </p>
        <a
          className="bmc-button"
          href="https://www.buymeacoffee.com/mannyandrebekah"
          target="_blank"
          rel="noopener noreferrer"
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
