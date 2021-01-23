import React from "react";
import { Container, Typography } from "@material-ui/core";

import logo from "../svgs/cypress-logo.svg";

export default function Footer() {
  return (
    <Container maxWidth="sm" style={{ marginTop: 50 }}>
      <Typography variant="body2" color="textSecondary" align="center">
        Built by
        <a
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://cypress.io"
        >
          <img
            style={{
              marginTop: -2,
              marginLeft: 5,
              height: "20px",
              width: "55px",
              verticalAlign: "middle",
            }}
            src={logo}
          />
        </a>
      </Typography>
    </Container>
  );
}
