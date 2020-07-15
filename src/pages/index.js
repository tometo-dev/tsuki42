import React from "react"
import tw from "twin.macro"

import Image from "components/image"
import SEO from "components/seo"

const Button = tw.button`
  bg-blue-500 hover:bg-blue-800 text-white p-2 rounded
`

const Home = () => (
  <div>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Button>Click me!!</Button>
  </div>
)

export default Home
