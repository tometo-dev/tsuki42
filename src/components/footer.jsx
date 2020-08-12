import React from "react"
import styled from "styled-components"

const CustomFooter = styled.footer`
  display: flex;
  background-color: var(--mainColor);
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
`

const Footer = () => {
  return (
    <CustomFooter>
      <div>
        <p>
          Built with{" "}
          <a href="https://www.gatsbyjs.org" target="_blank" rel="noreferrer">
            Gatsby
          </a>
        </p>
      </div>
      <div>
        <p>
          Designed by{" "}
          <a
            href="https://github.com/divanov11/portfolio-website"
            target="_blank"
            rel="noreferrer"
          >
            @divanov11
          </a>
        </p>
      </div>
    </CustomFooter>
  )
}

export default Footer
