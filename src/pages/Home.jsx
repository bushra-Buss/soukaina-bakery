import React from "react";
import FeaturedProducts from "../components/FeaturedProducts";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import cover from "../assets/cover.jpg";
import logo from "../assets/soukaina.jpg";

export default function Home() {
  return (
    <Box
      sx={{
        overflowX: "hidden",
        width: "100vw",
        // Dynamically leave space for footer (height 70px + extra spacing 1rem)
        minHeight: "calc(100vh - 70px)", 
        pb: "calc(70px + 1rem)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          width: "100%",
        }}
      >
        {/* Left */}
        <Box
          sx={{
            width: "60%",
            backgroundImage:  `url(${cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Right */}
        <Box
          sx={{
            width: "40%",
            backgroundColor: "#f7f7f7",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            p: 4,
          }}
        >
          <Box
            sx={{
              maxWidth: "80%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                backgroundColor: "white",
                display: "block",
              }}
            />

            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                color: "rgb(255, 156, 161)",
                fontSize: "8vh",
              }}
            >
              Welcome to our Store
            </Typography>

            <Button
              component={Link}
              to="/store"
              sx={{
                backgroundColor: "#2fba4d",
                color: "rgb(59, 58, 58)",
                fontSize: "18px",
                padding: "10px 30px",
                "&:hover": { backgroundColor: "rgba(71, 209, 186, 0.8)" },
                textTransform: "none",
              }}
            >
              Our Products!
            </Button>
          </Box>
        </Box>
      </Box>

      <FeaturedProducts />
    </Box>
  );
}
