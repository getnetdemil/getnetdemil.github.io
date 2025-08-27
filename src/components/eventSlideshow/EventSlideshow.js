import React, { Component } from "react";
import { getConferenceImages, addConferenceImageMetadata } from "../../utils/imageLoader";
import "./EventSlideshow.css";

class EventSlideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      isPlaying: true,
      images: []
    };
    this.slideInterval = null;
  }

  componentDidMount() {
    this.loadImages();
    this.startSlideshow();
  }

  loadImages = () => {
    try {
      // Load images from conference_pictures folder
      const conferenceImages = getConferenceImages();
      const imagesWithMetadata = addConferenceImageMetadata(conferenceImages);
      this.setState({ images: imagesWithMetadata });
    } catch (error) {
      console.error('Error loading conference images:', error);
      // Fallback to props if dynamic loading fails
      this.setState({ images: this.props.eventImages || [] });
    }
  };

  componentWillUnmount() {
    this.stopSlideshow();
  }

  startSlideshow = () => {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000); // Change slide every 4 seconds
  };

  stopSlideshow = () => {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.slideInterval = null;
    }
  };

  nextSlide = () => {
    const { images } = this.state;
    this.setState(prevState => ({
      currentSlide: (prevState.currentSlide + 1) % images.length
    }));
  };

  prevSlide = () => {
    const { images } = this.state;
    this.setState(prevState => ({
      currentSlide: prevState.currentSlide === 0 
        ? images.length - 1 
        : prevState.currentSlide - 1
    }));
  };

  goToSlide = (index) => {
    this.setState({ currentSlide: index });
  };

  togglePlayPause = () => {
    const { isPlaying } = this.state;
    if (isPlaying) {
      this.stopSlideshow();
    } else {
      this.startSlideshow();
    }
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    const { theme } = this.props;
    const { currentSlide, isPlaying, images } = this.state;

    if (!images || images.length === 0) {
      return (
        <div className="slideshow-section">
          <div className="slideshow-header" style={{ color: theme.text }}>
            <h2>Conference & Events Gallery</h2>
            <p style={{ color: theme.secondaryText }}>
              Add your conference photos to src/assests/images/conference_pictures/ folder
            </p>
          </div>
        </div>
      );
    }

    const currentImage = images[currentSlide];

    return (
      <div className="slideshow-section">
        <div 
          className="slideshow-header"
          style={{ color: theme.text }}
        >
          <h2>Conference & Events Gallery</h2>
          <p style={{ color: theme.secondaryText }}>
            Highlights from conferences, workshops, and academic events
          </p>
        </div>

        <div className="slideshow-container">
          <div className="slide-wrapper">
            <div 
              className="slide-track"
              style={{ 
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              {images.map((image, index) => (
                <div key={index} className="slide">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="slide-image"
                    onError={(e) => {
                      e.target.src = require('../../assests/images/experience.svg');
                    }}
                  />
                  <div className="slide-overlay">
                    <div 
                      className="slide-content"
                      style={{ color: 'white' }}
                    >
                      <h4>{image.title}</h4>
                      <p>{image.description}</p>
                      {image.location && (
                        <span className="slide-location">📍 {image.location}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <button 
            className="slide-nav slide-nav-prev"
            onClick={this.prevSlide}
            style={{ backgroundColor: theme.highlight }}
            aria-label="Previous slide"
          >
            &#8249;
          </button>
          
          <button 
            className="slide-nav slide-nav-next"
            onClick={this.nextSlide}
            style={{ backgroundColor: theme.highlight }}
            aria-label="Next slide"
          >
            &#8250;
          </button>

          {/* Play/Pause Button */}
          <button 
            className="slide-play-pause"
            onClick={this.togglePlayPause}
            style={{ backgroundColor: theme.highlight }}
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>

          {/* Slide Indicators */}
          <div className="slide-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`slide-indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => this.goToSlide(index)}
                style={{ 
                  backgroundColor: index === currentSlide 
                    ? theme.highlight 
                    : theme.secondaryText + '50'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Image Counter */}
          <div 
            className="slide-counter"
            style={{ color: theme.text, backgroundColor: theme.body + 'CC' }}
          >
            {currentSlide + 1} / {images.length}
          </div>
        </div>
      </div>
    );
  }
}

export default EventSlideshow;