import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      medium_cover_image
      genres
      rating
      description_intro
    }
    suggestions(id: $id) {
      id
      title
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 60%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
  width: 40%;
`;

const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-image: url(${(props) => props.bg});
  background-color: transparent;
`;
const SuggestionList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: gray;
  height: 250px;
  margin-top: 180px;
`;
const Suggestion = styled.div`
  width: 250px;
  height: 200px;
  margin-top: 50px;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id },
  });

  return (
    <Container>
      <Column>
        {loading ? (
          <Title>Loading...</Title>
        ) : (
          <>
            <Title>{data.movie.title}</Title>
            <Subtitle>
              {data.movie.genres} <span>{data.movie.ratirng}</span>
            </Subtitle>
            <Description>{data.movie.description_intro} </Description>
          </>
        )}

        <SuggestionList>
          {data?.suggestions?.map((movie) => (
            <>
              <Suggestion
                key={movie.id}
                bg={data?.suggestions ? movie.medium_cover_image : ""}
              >
                {movie.title}
              </Suggestion>
            </>
          ))}
        </SuggestionList>
      </Column>
      <Poster bg={data?.movie?.medium_cover_image}></Poster>
    </Container>
  );
};

export default Detail;
