import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 400px;
  width: 100%;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, 0.2);
`;
const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
`;

const Movie = ({ id, medium_cover_image }) => {
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={medium_cover_image}></Poster>
      </Link>
    </Container>
  );
};

export default Movie;
