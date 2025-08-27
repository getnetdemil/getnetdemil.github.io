import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import NewsContainer from "../../containers/news/NewsContainer";
import EventSlideshow from "../../components/eventSlideshow/EventSlideshow";
import { Fade } from "react-reveal";
import "./News.css";

class News extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="news-main">
        <Header theme={theme} />
        <div className="basic-news">
          <Fade bottom duration={2000} distance="40px">
            <div className="news-heading-div">
              <div className="news-heading-img-div">
                <img
                  src={require("../../assests/images/blogs_image.svg")}
                  alt="News"
                />
              </div>
              <div className="news-heading-text-div">
                <h1
                  className="news-heading-text"
                  style={{ color: theme.text }}
                >
                  Latest News & Updates
                </h1>
                <p
                  className="news-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  Stay updated with my latest research activities, publications, and professional milestones
                </p>
              </div>
            </div>
          </Fade>
          <NewsContainer theme={theme} />
          
          <Fade bottom duration={2000} distance="40px">
            <EventSlideshow 
              theme={theme} 
            />
          </Fade>
        </div>
        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default News;