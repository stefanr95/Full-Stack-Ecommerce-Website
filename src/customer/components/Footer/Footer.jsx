import React from "react";
import Grid from "@mui/material/Grid";
import { Typography,  Link } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Grid
        container
        justifyContent="center"
        alignItems="stretch"  // Dodato ovde
        sx={{ bgcolor: "black", color: "white", py: 3, textAlign: "center", mt: 10 }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{ mb: 3, display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <Typography sx={{ pb: 2 }} variant="h6">
            Company
          </Typography>
          {["About", "Blog", "Press", "Jobs", "Partners"].map((item) => (
            <Link key={item} href="#" sx={{ color: "inherit", mb: 1 }}>
              {item}
            </Link>
          ))}
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{ mb: 3, display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <Typography sx={{ pb: 2 }} variant="h6">
            Solutions
          </Typography>
          {["Marketing", "Analytics", "Commerce", "Insights", "Support"].map(
            (item) => (
              <Link key={item} href="#" sx={{ color: "inherit", mb: 1 }}>
                {item}
              </Link>
            )
          )}
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{ mb: 3, display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <Typography sx={{ pb: 2 }} variant="h6">
            Documentation
          </Typography>
          {["Guides", "API Status"].map((item) => (
            <Link key={item} href="#" sx={{ color: "inherit", mb: 1 }}>
              {item}
            </Link>
          ))}
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{ mb: 3, display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <Typography sx={{ pb: 2 }} variant="h6">
            Legal
          </Typography>
          {["Claim", "Privacy", "Terms"].map((item) => (
            <Link key={item} href="#" sx={{ color: "inherit", mb: 1 }}>
              {item}
            </Link>
          ))}
        </Grid>

        <Grid item xs={12} sx={{ pt: 3 }}>
          <Typography variant="body2" align="center">
            &copy; 2024 My Company. All rights reserved.
          </Typography>
          <Typography variant="body2" align="center">
            Made by Stefan Radomirovic.
          </Typography>
          <Typography variant="body2" align="center">
            Icons made by{" "}
            <Link href="https://www.freepik.com" color="inherit" underline="always">
              Freepik
            </Link>{" "}
            from{" "}
            <Link href="https://www.flaticon.com" color="inherit" underline="always">
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
