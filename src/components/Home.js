import React, { Component } from "react";
import Footer from "./Footer";
import StartPage from "./StartPage";

export default class Home extends Component {
  render() {
    return (
      <div>
        <StartPage />
        <Footer />
      </div>
    );
  }
}
