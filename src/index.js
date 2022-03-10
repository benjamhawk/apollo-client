import React from "react";
import { render } from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App";
import { StyledEngineProvider } from "@mui/material/styles";

const client = new ApolloClient({
  uri: "https://lr9f6o.sse.codesandbox.io",
  cache: new InMemoryCache()
});

render(
  <StyledEngineProvider injectFirst>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StyledEngineProvider>,
  document.getElementById("root")
);
