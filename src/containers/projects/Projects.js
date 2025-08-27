import React, { useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import "./Project.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { openSource } from "../../portfolio";
import { greeting } from "../../portfolio.js";

export default function Projects() {
  const [repo, setrepo] = useState([]);

  useEffect(() => {
    // For now, let's use mock data to test the roller coaster design
    // You can uncomment getRepoData() and comment mockData() when you have a valid GitHub token
    mockData();
    // getRepoData();
  }, []);

  function mockData() {
    // Mock project data for testing the roller coaster
    const mockProjects = [
      {
        id: "1",
        nameWithOwner: "getnetdemil/snow-detection",
        description: "Deep learning based snow detection using satellite imagery",
        forkCount: 12,
        stargazers: { totalCount: 45 },
        url: "https://github.com/getnetdemil/snow-detection",
        primaryLanguage: { name: "Python", color: "#3776ab" }
      },
      {
        id: "2", 
        nameWithOwner: "getnetdemil/image-processing-cv",
        description: "Computer Vision and Image Processing projects collection",
        forkCount: 8,
        stargazers: { totalCount: 32 },
        url: "https://github.com/getnetdemil/image-processing-cv",
        primaryLanguage: { name: "Python", color: "#3776ab" }
      },
      {
        id: "3",
        nameWithOwner: "getnetdemil/ai-climate-monitoring", 
        description: "AI applications for climate change monitoring using social media",
        forkCount: 5,
        stargazers: { totalCount: 28 },
        url: "https://github.com/getnetdemil/ai-climate-monitoring",
        primaryLanguage: { name: "Python", color: "#3776ab" }
      },
      {
        id: "4",
        nameWithOwner: "getnetdemil/portfolio-website",
        description: "Personal portfolio website built with React",
        forkCount: 3,
        stargazers: { totalCount: 15 },
        url: "https://github.com/getnetdemil/portfolio-website",
        primaryLanguage: { name: "JavaScript", color: "#f1e05a" }
      },
      {
        id: "5",
        nameWithOwner: "getnetdemil/hydrology-modeling",
        description: "Machine learning approaches for hydrology parameter estimation",
        forkCount: 7,
        stargazers: { totalCount: 38 },
        url: "https://github.com/getnetdemil/hydrology-modeling",
        primaryLanguage: { name: "Python", color: "#3776ab" }
      },
      {
        id: "6",
        nameWithOwner: "getnetdemil/research-tools",
        description: "Collection of research tools and utilities for data analysis",
        forkCount: 4,
        stargazers: { totalCount: 22 },
        url: "https://github.com/getnetdemil/research-tools",
        primaryLanguage: { name: "Matlab", color: "#e16737" }
      }
    ];
    
    setrepo(mockProjects);
  }

  function getRepoData() {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: (operation) => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${atob(openSource.githubConvertedToken)}`,
          },
        });
      },
    });

    client
      .query({
        query: gql`
          {
            repositoryOwner(login: "${openSource.githubUserName}") {
              ... on User {
                pinnedRepositories(first: 6) {
                  edges {
                    node {
                      nameWithOwner
                      description
                      forkCount
                      stargazers {
                        totalCount
                      }
                      url
                      id
                      diskUsage
                      primaryLanguage {
                        name
                        color
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      })
      .then((result) => {
        setrepoFunction(result.data.repositoryOwner.pinnedRepositories.edges);
        console.log(result);
      })
      .catch((error) => {
        console.log("GitHub API Error, using mock data:", error);
        mockData(); // Fallback to mock data if API fails
      });
  }

  function setrepoFunction(array) {
    setrepo(array);
  }

  return (
    <div className="main" id="opensource">
      <h1 className="project-title">Open Source Projects</h1>
      <div className="repo-cards-div-main">
        {/* Support Pillars */}
        <div className="support-pillar left-pillar"></div>
        <div className="support-pillar right-pillar"></div>
        
        {/* Roller Coaster Track */}
        <div className="roller-coaster-track"></div>
        
        {/* Rotating Project Carousel */}
        <div className="project-carousel">
          {repo.map((v, i) => {
            return (
              <div 
                className="repo-card-hanging" 
                key={v.id}
                style={{
                  '--rotation': `${i * 60}deg`,
                  transform: `translate(-50%, -50%) rotateZ(${i * 60}deg) translateY(-175px) rotateZ(-${i * 60}deg)`
                }}
              >
                <GithubRepoCard repo={v} />
              </div>
            );
          })}
        </div>
      </div>
      <Button
        text={"More Projects"}
        className="project-button"
        href={greeting.githubProfile}
        newTab={true}
      />
    </div>
  );
}
