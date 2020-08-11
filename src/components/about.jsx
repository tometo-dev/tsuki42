import React from "react"
import styled from "styled-components"
import { Section2, MainContainer } from "components/sections"

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
              While I am mostly working on React, I also do backend in Django
              and Go.
            </p>

            <hr />

            <h4>TOP EXPERTISE</h4>

            <p>
              Fullstack developer with primary focus on Django + React:{" "}
              <a target="_blank" href="resume.pdf">
                Download Resume
              </a>
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
                <li>React Native</li>
                <li>gRPC</li>
                <li>Django</li>
                <li>Postgres</li>
              </ul>
            </SkillsWrapper>
          </div>
          <SocialLinks>
            <a target="_blank" href="https://twitter.com/__tsuki__42">
              Twitter: @__tsuki__42
            </a>
            <br />
            <a target="_blank" href="https://github.com/tsuki42">
              Github: @tsuki42
            </a>
          </SocialLinks>
        </AboutWrapper>
      </MainContainer>
    </Section2>
  )
}

export default About