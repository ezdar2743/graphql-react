import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      id
      medium_cover_image
      genres
      description_intro
    }
  }
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id },
  });

  if (loading) return "Loading..";
  if (data && data.movie) return data.movie.title;
};

export default Detail;
