import React from "react"
import tw from "twin.macro"

import SEO from "components/seo"
import Image from "components/image"
import Icons from "components/icons"

const Name = tw.h1`
mb-3 text-4xl text-blue-400 md:text-6xl
`

const Para = tw.p`
mb-5
`

const SocialIcons = tw.div`
flex mb-2 space-x-3`

const Home = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    <SEO title="Home" />
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div style={{ flex: 1 }}>
        <Image />
      </div>
      <div style={{ flex: 2, marginLeft: "5rem", marginRight: "5rem" }}>
        <Name>Hello, I'm Sudhanshu.</Name>
        <Para>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Para>

        <Para>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Para>

        <Para>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Para>
      </div>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <SocialIcons>
        <a
          href="https://linkedin.com/in/perfectsudh"
          target="_blank"
          rel="noopener"
        >
          <Icons name="linkedin" />
        </a>

        <a href="https://github.com/tsuki42" target="_blank" rel="noopener">
          <Icons name="github" />
        </a>
        <a
          href="https://twitter.com/__tsuki__42"
          target="_blank"
          rel="noopener"
        >
          <Icons name="twitter" />
        </a>
      </SocialIcons>
    </div>
  </div>
)

export default Home
