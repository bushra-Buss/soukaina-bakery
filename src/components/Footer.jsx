import React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "#f7f7f7",
        p: 2, // less padding
        position: "fixed",
        bottom: 0,
        left: 0,
        boxShadow: "0 -1px 5px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 1, sm: 0 },
          mb: 1,
        }}
      >
        {/* Left side - Contact */}
        <Link
          href="/contact"
          underline="none"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            transition: "transform 0.2s",
            "&:hover": { transform: "scale(1.05)", color: "#2fba4d" },
          }}
        >
          <Box
            component="img"
            src="/contact.jpeg"
            alt="Contact"
            sx={{ width: 30, height: 30, borderRadius: 1 }}
          />
          <Typography variant="body2" color="text.primary">
            Contact
          </Typography>
        </Link>

        {/* Right side - Social Icons */}
        <Stack
          direction="row"
          spacing={2} // smaller spacing
          justifyContent="center"
          alignItems="center"
        >
          {[
            { href: "https://www.facebook.com/soukaina.janati.1", src: "/facebook.png", label: "Facebook" },
            { href: "https://www.instagram.com/frostedbysoukaina/", src: "/instagram.avif", label: "Instagram" },
            { href: "https://wa.me/1234567890", src: "/whatsapp.jpeg", label: "WhatsApp" },
          ].map((social, idx) => (
            <Link
              key={idx}
              href={social.href}
              target="_blank"
              underline="none"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0.5,
                transition: "transform 0.2s, color 0.2s",
                "&:hover": { transform: "scale(1.1)", color: "#2fba4d" },
              }}
            >
              <Box
                component="img"
                src={social.src}
                alt={social.label}
                sx={{
                  width: 35,
                  height: 35,
                  borderRadius: "50%",
                  border: "1px solid #ccc",
                  p: 0.5,
                  bgcolor: "#fff",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                }}
              />
              <Typography variant="caption" color="text.primary">
                {social.label}
              </Typography>
            </Link>
          ))}
        </Stack>
      </Box>

      {/* Copyright */}
      <Typography variant="caption" color="text.secondary" sx={{ textAlign: "center" }}>
        &copy; 2023 Soukina Cakery
      </Typography>
    </Box>
  );
}
