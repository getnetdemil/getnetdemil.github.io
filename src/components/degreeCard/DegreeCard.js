import React, { Component } from "react";
import "./DegreeCard.css";
import { Fade } from "react-reveal";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    const index = this.props.index;
    const isEven = index % 2 === 0;
    
    return (
      <div className={`education-timeline-item ${isEven ? 'timeline-left' : 'timeline-right'}`}>
        {/* Timeline Marker */}
        <div className="education-timeline-marker">
          <div className="timeline-dot-wrapper">
            <div className="timeline-dot">
              <div className="dot-inner">🎓</div>
            </div>
          </div>
        </div>
        
        {/* Card Content */}
        <div className="education-timeline-content">
          <Fade 
            left={isEven} 
            right={!isEven} 
            duration={1000} 
            distance="40px"
          >
            <div className="education-card">
              <div className="education-card-header">
                <div className="university-info">
                  <h2 className="university-title">{degree.title}</h2>
                  <h3 className="degree-subtitle">{degree.subtitle}</h3>
                  <div className="degree-duration">{degree.duration}</div>
                </div>
              </div>
              
              <div className="education-card-body">
                <div className="degree-descriptions">
                  {degree.descriptions.map((sentence, idx) => (
                    <div key={idx} className="degree-description">
                      <span className="description-bullet">•</span>
                      <span className="description-text">{sentence.replace('⚡ ', '')}</span>
                    </div>
                  ))}
                </div>
                
                {degree.website_link && (
                  <div className="education-card-footer">
                    <a
                      href={degree.website_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="visit-website-btn"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default DegreeCard;
