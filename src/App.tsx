import {
  Card,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import styles from "./App.module.css";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

function App() {
  const [markdown, setMarkdown] = useState("");

  const renderers = {
    code: (props: any) => {
      return (
        <SyntaxHighlighter
          style={dark}
          language={props.language}
          children={props.value}
        />
      );
    },
  };

  return (
    <Container fixed>
      <Typography align="center" variant="h4" className={styles.title}>
        Markdown Renderer
      </Typography>
      <Typography
        align="left"
        gutterBottom
        className={styles.subtitle}
        variant="h6"
      >
        Learn about markdown{" "}
        <a
          href="https://www.markdownguide.org/getting-started"
          className={styles.link}
        >
          here
        </a>
      </Typography>
      <Typography className={styles.footer}>
        Check me out on{" "}
        <a href="https://github.com/halchester/markdown-renderer" className={styles.link}>
          <strong>github</strong>
        </a>
        {""}!
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={6}>
          <TextField
            label="Enter your markdown here"
            variant="outlined"
            fullWidth
            multiline
            rows={15}
            value={markdown}
            onChange={(e) => {
              setMarkdown(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Typography
            variant="h6"
            align="center"
            className={styles.text__title}
          >
            Your text here
          </Typography>
          <Card className={styles.text} elevation = {3}>
            <ReactMarkdown renderers={renderers} plugins={[gfm]}>
              {markdown}
            </ReactMarkdown>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
