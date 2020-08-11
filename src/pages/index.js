import React from "react"
import SEO from "components/seo"
import GlobalStyles from "components/global-styles"
import ClientOnly from "components/client-only"
import Navigation from "components/navigation"
import About from "components/about"

const Home = () => {
  return (
    <ClientOnly>
      <GlobalStyles />
      <div>
        <Navigation />
        <About />
      </div>
    </ClientOnly>
  )
}

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Home />
  </>
)

export default IndexPage
