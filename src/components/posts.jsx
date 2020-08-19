import React from "react"
import styled from "styled-components"
import { Section1, MainContainer } from "components/sections"
import { useFetch } from "hooks/use-fetch"

const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 320px);
  gap: 20px;
  justify-content: center;
  padding-bottom: 50px;
`

const PostContainer = styled.div`
  border: 1px solid var(--borderColor);
  -webkit-box-shadow: -2px 7px 21px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -2px 7px 21px -9px rgba(0, 0, 0, 0.75);
  box-shadow: -2px 7px 21px -9px rgba(0, 0, 0, 0.75);

  &:hover {
    cursor: pointer;
    -webkit-box-shadow: 47px 35px 5px 0px rgba(0, 0, 0, 0.63);
    -moz-box-shadow: 47px 35px 5px 0px rgba(0, 0, 0, 0.63);
    box-shadow: 47px 35px 5px 0px rgba(0, 0, 0, 0.63);
  }
`

const PostPreview = styled.div`
  background-color: #fff;
  padding: 15px;
`

const PostTitle = styled.h5`
  color: black;
  margin: 0;
`
const PostIntro = styled.p`
  color: #4b5156;
  font-size: 14px;
`

const Post = ({ title, intro, link }) => (
  <a href={link} target="_blank" rel="noreferrer">
    <PostContainer>
      <PostPreview>
        <PostTitle>{title}</PostTitle>
        {!!intro && <PostIntro>{intro}</PostIntro>}
      </PostPreview>
    </PostContainer>
  </a>
)

const Posts = () => {
  const { data, isLoading } = useFetch({
    url: "https://dev.to/api/articles/me",
    config: {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "api-key": process.env.GATSBY_DEV_TO_API_KEY,
      },
      query: { per_page: "3" },
    },
  })

  return (
    <Section1>
      <MainContainer>
        <h3 style={{ textAlign: "center" }}>Things I wrote...</h3>
        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h4>Loading...</h4>
          </div>
        ) : (
          <PostWrapper>
            {data?.map((article) => (
              <Post title={article.title} link={article.url} />
            ))}
          </PostWrapper>
        )}
      </MainContainer>
    </Section1>
  )
}

export default Posts
