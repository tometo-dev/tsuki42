import React from "react"
import GlobalStyles from "components/global-styles"
import Navigation from "components/navigation"
import SEO from "components/seo"

const Home = () => {
  return (
    <>
      <GlobalStyles />
      <div>
        <Navigation />
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
