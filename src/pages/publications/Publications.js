import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PublicationsList from "../../containers/publications/Publications";
import TopButton from "../../components/topButton/TopButton";
import "./Publications.css";

class Publications extends Component {
  render() {
    return (
      <div className="publications-main">
        <Header theme={this.props.theme} />
        <PublicationsList theme={this.props.theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Publications;