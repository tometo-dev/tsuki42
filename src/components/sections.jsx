import styled from "styled-components"

export const Section1 = styled.section`
  background-color: var(--mainColor);
  border-bottom: 1px solid var(--borderColor);
  overflow: auto;
`
export const Section2 = styled.section`
  background-color: var(--secondaryColor);
  border-bottom: 1px solid var(--borderColor);
  overflow: auto;
`
export const MainContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 1200px) {
    width: 95%;
  }
`
