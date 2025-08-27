import React, { Component } from "react";
import "./NewsContainer.css";
import NewsCard from "../../components/newsCard/NewsCard";
import { newsData } from "../../portfolio.js";
import { fetchNewsFromGitHub } from "../../utils/linkedinAPI";
import { Fade } from "react-reveal";

class NewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allNews: [],
      loading: true,
      error: null,
      newsSource: 'portfolio'
    };
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    try {
      let allNewsItems = [];
      
      // 1. Always include manual news from portfolio.js
      const portfolioNews = newsData.news || [];
      allNewsItems.push(...portfolioNews.map(item => ({...item, source: 'portfolio'})));
      
      // 2. Try to fetch from external JSON file
      try {
        const jsonResponse = await fetch('/news.json');
        if (jsonResponse.ok) {
          const jsonData = await jsonResponse.json();
          allNewsItems.push(...jsonData.news.map(item => ({...item, source: 'json'})));
        }
      } catch (jsonError) {
        console.log('JSON news file not accessible, using portfolio news only');
      }
      
      // 3. Try GitHub Issues as news source (optional)
      try {
        const githubNews = await fetchNewsFromGitHub('getnetdemil', 'getnetdemil.github.io', 'news');
        allNewsItems.push(...githubNews);
      } catch (githubError) {
        console.log('GitHub news not available:', githubError.message);
      }
      
      // Remove duplicates and sort by date (newest first)
      const uniqueNews = this.removeDuplicates(allNewsItems);
      const sortedNews = uniqueNews.sort((a, b) => new Date(b.date) - new Date(a.date));
      
      this.setState({
        allNews: sortedNews,
        loading: false,
        newsSource: this.getNewsSourceSummary(allNewsItems)
      });
      
    } catch (error) {
      console.error('Error fetching news:', error);
      this.setState({
        error: error.message,
        loading: false,
        allNews: newsData.news || []
      });
    }
  };

  removeDuplicates = (newsArray) => {
    const seen = new Set();
    return newsArray.filter(item => {
      const key = `${item.title}_${item.date}`;
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  };

  getNewsSourceSummary = (newsArray) => {
    const sources = newsArray.map(item => item.source);
    const uniqueSources = [...new Set(sources)];
    return uniqueSources.join(', ');
  };

  render() {
    const theme = this.props.theme;
    const { allNews, loading, error, newsSource } = this.state;

    if (loading) {
      return (
        <div className="news-container">
          <div className="loading-news" style={{ color: theme.text }}>
            Loading latest updates...
          </div>
        </div>
      );
    }

    if (!allNews.length) {
      return (
        <div className="news-container">
          <div className="no-news" style={{ color: theme.text }}>
            No news updates available at the moment.
          </div>
        </div>
      );
    }

    return (
      <div className="news-container">
        {newsSource && (
          <div className="news-info" style={{ color: theme.secondaryText }}>
            📰 News sources: {newsSource}
            {newsSource.includes('portfolio') && (
              <span> | Add news by editing portfolio.js or creating GitHub issues with label "news"</span>
            )}
          </div>
        )}
        
        {error && (
          <div className="news-error" style={{ color: theme.highlight }}>
            Note: Some news sources unavailable. Showing available updates.
          </div>
        )}
        
        <div className="news-cards-div">
          <div className="timeline-container">
            {allNews.map((news, i) => (
              <Fade bottom duration={2000} distance="40px" key={news.id || i}>
                <NewsCard
                  news={news}
                  theme={theme}
                  isTimeline={true}
                />
              </Fade>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default NewsContainer;