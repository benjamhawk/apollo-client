import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { gql, useMutation } from "@apollo/client";
import { GET_LINKS_QUERY } from "../SlugList";
import { LoadingBackdrop } from "../LoadingBackdrop";
import styles from "./Form.module.css";

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

  const [shortenUrlMutation, { loading, error }] = useMutation(
    SUBMIT_SHORTEN_URL,
    {
      variables: { url, slug },
      refetchQueries: [{ query: GET_LINKS_QUERY }]
    }
  );
  const isError = error?.graphQLErrors?.length > 0;

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await shortenUrlMutation({
        variables: {
          url,
          slug
        }
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className={styles.formWrapper}>
      {loading && <LoadingBackdrop />}
      <form onSubmit={handleSubmit}>
        <TextField
          className={styles.input}
          label="Make your links shorter"
          variant="outlined"
          defaultValue=""
          size="small"
          required
          name="url"
          value={url}
          onChange={(e) => {
            setUrl(e?.target?.value);
          }}
        />
        <TextField
          className={styles.input}
          label="Custom slug"
          variant="outlined"
          name="slug"
          size="small"
          defaultValue=""
          value={slug}
          error={isError}
          helperText={
            isError
              ? error?.graphQLErrors?.map((error, i) => {
                  return <p>{error?.message}</p>;
                })
              : ""
          }
          onChange={(e) => {
            setSlug(e?.target?.value);
          }}
        />
        <Button type="submit" variant="contained">
          Shorten URL
        </Button>
      </form>
    </div>
  );
};
