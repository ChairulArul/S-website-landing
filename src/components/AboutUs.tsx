import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function AboutUs() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* menghilangkan margin width */}
      <Container
        maxWidth={false}
        disableGutters
        sx={{ backgroundColor: "#1976d2" }}
      >
        <Box
          sx={{
            height: "15vh",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            fontWeight: "bold",
            fontSize: "30px",
            color: "whitesmoke",
          }}
        >
          About us
        </Box>
      </Container>
    </React.Fragment>
  );
}
