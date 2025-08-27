import React, { Component } from 'react';
import './ExperienceCard.css';
import { Fade } from "react-reveal";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const index = this.props.index;
    const totalCards = this.props.totalCards;
    const theme = this.props.theme;
    const isEven = index % 2 === 0;
    
    return (
      <div className={`timeline-item ${isEven ? 'timeline-left' : 'timeline-right'}`}>
        <div className="timeline-marker">
          <div 
            className="timeline-dot" 
            style={{ 
              backgroundColor: experience.color || theme.headerColor
            }}
          />
        </div>
        
        <div className="timeline-content">
          <Fade 
            left={isEven} 
            right={!isEven} 
            duration={1000} 
            distance="40px"
          >
            <div className="timeline-card" style={{ background: theme.body, borderColor: experience.color || theme.headerColor }}>
              <div className="timeline-card-header">
                <div className="timeline-logo">
                  <img
                    src={require(`../../assests/images/${experience["logo_path"]}`)}
                    alt={experience.company}
                    className="timeline-logo-img"
                  />
                </div>
                <div className="timeline-details">
                  <h3 className="timeline-title" style={{ color: theme.text }}>
                    {experience["title"]}
                  </h3>
                  <p className="timeline-company" style={{ color: theme.text }}>
                    <a href={experience["company_url"]} target="_blank" rel="noopener noreferrer">
                      {experience["company"]}
                    </a>
                  </p>
                  <div className="timeline-meta">
                    <span className="timeline-duration" style={{ color: theme.secondaryText }}>
                      {experience["duration"]}
                    </span>
                    <span className="timeline-location" style={{ color: theme.secondaryText }}>
                      {experience["location"]}
                    </span>
                  </div>
                </div>
              </div>
              <div className="timeline-description" style={{ color: theme.text }}>
                {experience["description"]}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default ExperienceCard;
