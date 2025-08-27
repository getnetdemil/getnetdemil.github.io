import React, { Component } from "react";
import "./Publications.css";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import { Fade } from "react-reveal";
import { publicationsHeader, publications } from "../../portfolio.js";

class Publications extends Component {
  render() {
    const theme = this.props.theme;
    
    return (
      <div className="publications-container">
        <div className="publications-header-section">
          <Fade bottom duration={1000} distance="20px">
            <div className="publications-heading-div">
              {/* Illustration removed due to missing or incorrect SVG */}
              <div className="publications-heading-text-div">
                <h1
                  className="publications-heading-text"
                  style={{ color: theme.text }}
                >
                  {publicationsHeader.title}
                </h1>
                <p
                  className="publications-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {publicationsHeader.description}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        <div className="publications-body-div">
          {publications.data.map((publication, index) => (
            <Fade bottom duration={1000} distance="20px" key={index}>
              <PublicationCard
                pub={publication}
                theme={theme}
              />
            </Fade>
          ))}
        </div>
      </div>
    );
  }
}

export default Publications;