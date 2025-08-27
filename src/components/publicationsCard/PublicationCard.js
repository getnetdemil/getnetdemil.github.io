import React from "react";
import "./PublicationCard.css";
import { Fade } from "react-reveal";

export default function PublicationCard({ pub, theme }) {
  function openPubinNewTab(url) {
    if (url) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }

  return (
    <Fade bottom duration={800} distance="40px">
      <div
        className="publication-card-div"
        style={{ backgroundColor: theme.projectCard }}
        onClick={() => openPubinNewTab(pub.url)}
      >
        <div className="publication-header">
          <div className="publication-type-badge" style={{ backgroundColor: theme.highlight }}>
            <span style={{ color: theme.text }}>{pub.type}</span>
          </div>
          <div className="publication-year" style={{ color: theme.secondaryText }}>
            {pub.year}
          </div>
        </div>

        <div className="publication-content">
          <h3 className="publication-title" style={{ color: theme.text }}>
            {pub.title}
          </h3>
          
          <p className="publication-authors" style={{ color: theme.secondaryText }}>
            {pub.authors}
          </p>
          
          <p className="publication-abstract" style={{ color: theme.text }}>
            {pub.abstract}
          </p>
          
          <div className="publication-venue" style={{ color: theme.highlight }}>
            <i className="fas fa-book"></i>
            <span>{pub.venue}</span>
          </div>
        </div>

        <div className="publication-footer">
          <div className="publication-stats">
            {pub.citations && (
              <div className="stat-item">
                <i className="fas fa-quote-left" style={{ color: theme.secondaryText }}></i>
                <span style={{ color: theme.secondaryText }}>{pub.citations} citations</span>
              </div>
            )}
            {pub.impact && (
              <div className="stat-item">
                <i className="fas fa-star" style={{ color: theme.secondaryText }}></i>
                <span style={{ color: theme.secondaryText }}>Impact: {pub.impact}</span>
              </div>
            )}
          </div>
          
          <div className="publication-links">
            {pub.doi && (
              <a 
                href={pub.doi} 
                target="_blank" 
                rel="noopener noreferrer"
                className="pub-link"
                style={{ color: theme.highlight }}
                onClick={(e) => e.stopPropagation()}
              >
                DOI
              </a>
            )}
            {pub.pdfUrl && (
              <a 
                href={pub.pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="pub-link"
                style={{ color: theme.highlight }}
                onClick={(e) => e.stopPropagation()}
              >
                PDF
              </a>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
