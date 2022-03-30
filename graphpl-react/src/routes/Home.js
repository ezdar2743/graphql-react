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
  console.log(data);
  return <div>Home</div>;
};

export default Home;
