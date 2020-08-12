import React from "react"
import styled from "styled-components"
import { Section1, MainContainer } from "components/sections"
import Image from "components/image"
import { useCustomTheme } from "context/custom-theme-provider"

const GreetingWrapper = styled.div`
  display: grid;
  text-align: center;
  align-content: center;
  min-height: 10em;
`
const IntroWrapper = styled.div`
  background-color: var(--secondaryColor);
  border: 1px solid var(--borderColor);
  border-radius: 5px 5px 0 0;

  -webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "nav-wrapper nav-wrapper"
    "left-column right-column";

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "nav-wrapper"
      "left-column"
      "right-column";
  }
`

const NavWrapper = styled.div`
  border-radius: 5px 5px 0 0;
  grid-area: nav-wrapper;
  border-bottom: 1px solid var(--borderColor);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--mainColor);
`
const DotsWrapper = styled.div`
  display: flex;
  padding: 10px;
`

const BrowserDot = styled.div`
  background-color: black;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin: 5px;

  -webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
`

const NavigationUL = styled.ul`
  margin: 0;
  padding: 10px;
`
const NavigationLI = styled.li`
  display: inline-block;
  margin-right: 5px;
  margin-left: 5px;
`

const LeftColumn = styled.div`
  grid-area: left-column;
  padding-top: 50px;
  padding-bottom: 50px;
`

const ProfilePic = styled(Image)`
  display: block;
  margin: 0 auto;

  height: 200px;
  width: 200px;
  object-fit: cover;
  border: 2px solid var(--borderColor);
`

const ThemeOptionsWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const ThemeDot = styled.div`
  height: 30px;
  width: 30px;
  background-color: black;
  border-radius: 50%;

  margin: 5px;
  border: 2px solid var(--themeDotBorder);

  -webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);

  cursor: pointer;

  &:hover {
    border-width: 5px;
  }
`

const RightColumn = styled.div`
  grid-area: right-column;
  display: grid;
  align-content: center;

  padding-top: 50px;
  padding-bottom: 50px;

  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`
const PreviewShadow = styled.div`
  background-color: var(--previewShadow);
  max-width: 300px;
  height: 180px;
  padding-left: 30px;
  padding-top: 30px;

  @media screen and (max-width: 400px) {
    max-width: 280px;
    height: 180px;
    padding-left: 10px;
    padding-top: 10px;
  }
`

const Preview = styled.div`
  width: 300px;
  height: 180px;
  border: 1.5px solid #17a2b8;
  background-color: var(--previewBg);
  padding: 15px;
  position: relative;

  @media screen and (max-width: 400px) {
    width: 280px;
    height: 180px;
  }
`

const Corner = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: 1.5px solid #17a2b8;
  background-color: #fff;
  position: absolute;
`

const Navigation = () => {
  const { setMode } = useCustomTheme()
  return (
    <Section1>
      <MainContainer>
        <GreetingWrapper>
          <h1>Hi, I'm Sudhanshu.</h1>
          <IntroWrapper>
            <NavWrapper>
              <DotsWrapper>
                <BrowserDot
                  style={{
                    backgroundColor: "#FC6058",
                  }}
                ></BrowserDot>
                <BrowserDot
                  style={{
                    backgroundColor: "#FEC02F",
                  }}
                ></BrowserDot>{" "}
                <BrowserDot
                  style={{
                    backgroundColor: "#2ACA3E",
                  }}
                ></BrowserDot>
              </DotsWrapper>
              <NavigationUL>
                <NavigationLI>
                  <a href="#contact">Contact</a>
                </NavigationLI>
              </NavigationUL>
            </NavWrapper>
            <LeftColumn>
              <ProfilePic />
              <h5
                style={{
                  marginTop: "3rem",
                  textAlign: "center",
                  lineHeight: 0,
                }}
              >
                Personalize Theme
              </h5>
              <ThemeOptionsWrapper>
                <ThemeDot
                  style={{ backgroundColor: "#fff" }}
                  onClick={() => {
                    setMode("light")
                  }}
                />
                <ThemeDot
                  style={{ backgroundColor: "#192734" }}
                  onClick={() => {
                    setMode("blue")
                  }}
                />
                <ThemeDot
                  style={{ backgroundColor: "#78866b" }}
                  onClick={() => {
                    setMode("green")
                  }}
                />
                <ThemeDot
                  style={{ backgroundColor: "#7E4C74" }}
                  onClick={() => {
                    setMode("purple")
                  }}
                />
              </ThemeOptionsWrapper>
              <p
                style={{
                  fontSize: "12px",
                  fontStyle: "italic",
                  textAlign: "center",
                }}
              >
                *Theme settings will be saved for
                <br />
                your next visit.
                <br />
                (Still a work in progress)
              </p>
            </LeftColumn>
            <RightColumn>
              <PreviewShadow>
                <Preview>
                  <Corner style={{ top: "-5px", left: "-5px" }} />
                  <Corner style={{ top: "-5px", right: "-5px" }} />
                  <h3>What I Do</h3>
                  <p>Developer. Mostly working on React nowadays.</p>
                  <Corner style={{ bottom: "-5px", right: "-5px" }} />
                  <Corner style={{ bottom: "-5px", left: "-5px" }} />
                </Preview>
              </PreviewShadow>
            </RightColumn>
          </IntroWrapper>
        </GreetingWrapper>
      </MainContainer>
    </Section1>
  )
}

export default Navigation
