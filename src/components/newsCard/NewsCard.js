import React, { Component } from "react";
import "./NewsCard.css";

class NewsCard extends Component {
  formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'publication':
        return '#007bff';
      case 'academic':
        return '#28a745';
      case 'conference':
        return '#ffc107';
      case 'award':
        return '#dc3545';
      default:
        return '#6c757d';
    }
  };

  render() {
    const news = this.props.news;
    const theme = this.props.theme;
    const isTimeline = this.props.isTimeline;

    if (isTimeline) {
      return (
        <div className="timeline-item">
          <div className="timeline-date-left" style={{ color: theme.highlight }}>
            {this.formatDate(news.date)}
          </div>
          <div className="timeline-marker" style={{ backgroundColor: theme.highlight }}></div>
          <div 
            className="timeline-content"
            style={{ 
              backgroundColor: theme.body, 
              color: theme.text,
              borderColor: theme.border 
            }}
          >
            <h3 
              className="timeline-title"
              style={{ color: theme.text }}
            >
              {news.title}
            </h3>
            
            <p 
              className="timeline-description"
              style={{ color: theme.secondaryText }}
            >
              {news.content}
            </p>
            
            {news.link && (
              <a
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-link"
                style={{ color: theme.highlight }}
              >
                Read more →
              </a>
            )}
          </div>
        </div>
      );
    }

    // Original card layout (fallback)
    const categoryColor = this.getCategoryColor(news.category);
    return (
      <div className="news-card">
        <div 
          className="news-card-header"
          style={{ backgroundColor: theme.body, borderColor: theme.border }}
        >
          {news.image && (
            <div className="news-image-container">
              <img
                src={require(`../../assests/images/${news.image}`)}
                alt={news.title}
                className="news-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}
          <div 
            className="news-category"
            style={{ backgroundColor: categoryColor }}
          >
            {news.category}
          </div>
        </div>
        
        <div 
          className="news-card-content"
          style={{ backgroundColor: theme.body, color: theme.text }}
        >
          <div className="news-date" style={{ color: theme.secondaryText }}>
            {this.formatDate(news.date)}
          </div>
          
          <h3 
            className="news-title"
            style={{ color: theme.text }}
          >
            {news.title}
          </h3>
          
          <p 
            className="news-content"
            style={{ color: theme.secondaryText }}
          >
            {news.content}
          </p>
          
          {news.link && (
            <div className="news-actions">
              <a
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="news-link"
                style={{ 
                  color: theme.highlight,
                  borderColor: theme.highlight 
                }}
              >
                Read More →
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default NewsCard;