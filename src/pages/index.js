import React from "react"
import SEO from "components/seo"
import GlobalStyles from "components/global-styles"
import Navigation from "components/navigation"
import About from "components/about"

const Home = () => {
  return (
    <>
      <GlobalStyles />
      <div>
        <Navigation />
        <About />
      </div>
    </>
  )
}

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Home />
  </>
)

export default IndexPage
