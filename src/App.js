import "./styles.css";
import React, { ErrorBoundary } from "react";

import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Form } from "./components/Form";
import { SlugList } from "./components/SlugList";
import styles from "./App.module.css";
import LinkSharpIcon from "@mui/icons-material/LinkSharp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <header>
        <h1>
          URL Shortener <LinkSharpIcon />
        </h1>
        <a href="/">
          <AccountCircleIcon fontSize="large" />
        </a>
      </header>

      <Container className={styles.container}>
        <section className={styles.tagLineContainer}>
          <h2>
            Your Brand on Your Links
            <LinkSharpIcon
              style={{
                fontSize: "5rem"
              }}
            />
          </h2>
          <img
            src="/person.png"
            alt="video screenshot of guy looking confused"
          />
          <p>
            Url-Shortener is the industry-leading link management platform to
            brand, track and share short URLs using a custom domain name
          </p>
        </section>
        <Form />
        <SlugList />
      </Container>
    </div>
  );
}
