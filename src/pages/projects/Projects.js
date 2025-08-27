import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: 0,
      totalProjects: ProjectsData.data.length
    };
  }

  componentDidMount() {
    // Highlight each project for 5 seconds
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        activeProject: (prevState.activeProject + 1) % prevState.totalProjects
      }));
    }, 5000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  // Calculate position around oval
  getProjectPosition(index, total) {
    const angle = (index * 360) / total;
    const centerX = 50;
    const centerY = 50;
    const radiusX = 35; // Horizontal radius (wider)
    const radiusY = 25; // Vertical radius (shorter for oval)
    
    const x = centerX + radiusX * Math.cos((angle * Math.PI) / 180);
    const y = centerY + radiusY * Math.sin((angle * Math.PI) / 180);
    
    return {
      left: `${x}%`,
      top: `${y}%`,
      transform: 'translate(-50%, -50%)'
    };
  }

  render() {
    const theme = this.props.theme;
    const { activeProject, totalProjects } = this.state;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main roller-coaster-container">
          {/* Simple Oval Track */}
          <div className="solar-oval-track"></div>
          
          {/* Projects positioned around oval */}
          <div className="project-carousel">
            {ProjectsData.data.map((repo, i) => {
              const position = this.getProjectPosition(i, totalProjects);
              const isActive = i === activeProject;
              
              return (
                <div 
                  key={repo.id}
                  className={`repo-card-hanging ${isActive ? 'active' : ''}`}
                  style={position}
                >
                  <GithubRepoCard repo={repo} theme={theme} />
                </div>
              );
            })}
          </div>
          
          {/* Project Info */}
          <div className="center-indicator">
            <div className="project-counter">
              Project {activeProject + 1} of {totalProjects}
            </div>
          </div>
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />

        {/* Publications  */}
        {publications.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {publicationsHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {publications.data.map((pub) => {
            return <PublicationCard pub={pub} theme={theme} />;
          })}
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
