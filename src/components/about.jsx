import React from "react"
import styled from "styled-components"
import { Section2, MainContainer } from "components/sections"
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

const SocialLinks = styled.div`
  display: grid;
  align-content: center;
  text-align: center;
  gap: 1rem;
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
              While I am currently employed, I am in search of a great team and
              projects that interest me. Get in touch with me for an interview!
            </p>

            <hr />

            <h4>TOP EXPERTISE</h4>

            <p>
              Fullstack developer with primary focus on React + Go.
              {/* <a target="_blank" href="resume.pdf">
                Download Resume
              </a> */}
            </p>
            <SkillsWrapper>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Go</li>
                <li>Python</li>
                <li>Docker</li>
              </ul>

              <ul>
                <li>TypeScript</li>
                <li>React Native</li>
                <li>gRPC</li>
                <li>Django</li>
                <li>Postgres</li>
              </ul>
            </SkillsWrapper>
          </div>
          <SocialLinks>
            <a
              target="_blank"
              href="https://twitter.com/__tsuki__42"
              rel="noreferrer"
            >
              <TwitterIcon />
              <div> @__tsuki__42</div>
            </a>
            <a
              target="_blank"
              href="https://github.com/tsuki42"
              rel="noreferrer"
            >
              <GithubIcon />
              <div>@tsuki42</div>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/perfectsudh"
              rel="noreferrer"
            >
              <LinkedIcon />
              <div>@perfectsudh</div>
            </a>
          </SocialLinks>
        </AboutWrapper>
      </MainContainer>
    </Section2>
  )
}

export default About
