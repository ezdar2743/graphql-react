import { gql, useQuery } from "@apollo/client";

import React from "react";
const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;
const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  if (loading) return "Loading..";
  if (data.movies) return data.movies.map((m) => <div key={m.id}>{m.id}</div>);
};

export default Home;
