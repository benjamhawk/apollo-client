import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { gql, useMutation } from "@apollo/client";
import { GET_LINKS_QUERY } from "../SlugList";
import { LoadingBackdrop } from "../LoadingBackdrop";
import "./Form.module.css";

// Define mutation
const SUBMIT_SHORTEN_URL = gql`
  # Increments a back-end counter and gets its resulting value
  mutation ShortenUrl($url: String!, $slug: String) {
    createLink(url: $url, slug: $slug) {
      id
      url
      slug
    }
  }
`;

export const Form = () => {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");

  const [shortenUrlMutation, { data, loading, error }] = useMutation(
    SUBMIT_SHORTEN_URL,
    {
      variables: { url, slug },
      refetchQueries: [{ query: GET_LINKS_QUERY }]
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    shortenUrlMutation({
      variables: {
        url,
        slug
      }
    });
  };

  if (loading) {
    return <LoadingBackdrop />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Make your links shorter"
        variant="outlined"
        defaultValue=""
        name="url"
        value={url}
        onChange={(e) => {
          setUrl(e?.target?.value);
        }}
      />
      <TextField
        label="Custom slug"
        variant="outlined"
        name="slug"
        defaultValue=""
        value={slug}
        onChange={(e) => {
          setSlug(e?.target?.value);
        }}
      />
      <Button type="submit" variant="contained">
        Shorten URL
      </Button>
    </form>
  );
};
