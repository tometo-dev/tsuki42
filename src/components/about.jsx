import React from "react"
import styled from "styled-components"
import { Section2, MainContainer } from "components/sections"
import Posts, { Post } from "components/posts"
import GithubIcon from "assets/icons/github.svg"
import LinkedIcon from "assets/icons/linkedin.svg"
import TwitterIcon from "assets/icons/twitter.svg"

const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  padding-bottom: 50px;
  padding-top: 50px;
  gap: 100px;
`

const SkillsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: var(--previewShadow);
`
const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 320px);
  justify-content: center;
  padding-bottom: 50px;
`

const About = () => {
  return (
    <Section2>
      <MainContainer>
        <AboutWrapper>
          <div>
            <h4>More about me</h4>

            <p>I love learning new things and applying them in my projects.</p>

            <p>
              While I am mostly working on React, I also do backend in Go and
              Django.
            </p>

            <p>
              You can get in touch with me by filling out the form{" "}
              <a href="#contact">below</a>.
            </p>

            <hr />

            <h4>Skills</h4>

            <p>
              Frontend Developer, primarily working with React. My top skills
              are:
              {/* <a target="_blank" href="resume.pdf">
                Download Resume
              </a> */}
            </p>
            <SkillsWrapper>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
              </ul>

              <ul>
                <li>TypeScript</li>
                <li>Docker</li>
              </ul>
            </SkillsWrapper>
            <p>
              Though I am a bit less accustomed to the following, I have also
              worked with:
            </p>
            <SkillsWrapper>
              <ul>
                <li>Python</li>
                <li>Go</li>
              </ul>

              <ul>
                <li>Django</li>
                <li>SQL</li>
              </ul>
            </SkillsWrapper>

            <p>
              See my{" "}
              <a
                href="https://sudh.xyz/resume-v2"
                target="_blank"
                rel="norefferer noopener"
              >
                resume
              </a>
            </p>
          </div>

          <PostWrapper>
            <h3 style={{ textAlign: "center" }}>Things I have written...</h3>
            <Post
              title="Role based access control in React-Redux apps"
              intro="Some insights into dealing with RBAC in React apps."
              link="https://dev.to/tsuki42/role-based-access-control-in-react-redux-apps-2i53"
            />
            <Post
              title="CI/CD pipeline with Docker, Github actions, Dockerhub and Watchtower"
              intro="A CI/CD pipeline for the development phase"
              link="https://dev.to/tsuki42/ci-cd-pipeline-with-docker-github-actions-dockerhub-and-watchtower-3l3n"
            />
            <Post
              title="Getting more from your portfolio"
              intro="A hassle-free, serverless way to collect form data"
              link="https://dev.to/tsuki42/getting-more-from-your-portfolio-1bgk"
            />
          </PostWrapper>
        </AboutWrapper>
      </MainContainer>
    </Section2>
  )
}

export default About
