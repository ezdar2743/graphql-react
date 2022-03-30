import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Globalstyle } from "./theme/global";
import client from "./apollo";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Globalstyle />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
