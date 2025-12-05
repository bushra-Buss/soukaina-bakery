import React from "react";
import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box>
      {/* Main About Section */}
      <Box
        className="aboutus"
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        {/* Background Image */}
        <img
          src="/soukaina.png"
          alt="background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.3,
            objectFit: "cover",
          }}
        />

        {/* Content Layer */}
        <Box
          className="layer"
          sx={{
            position: "relative",
            zIndex: 1,
            p: { xs: 2, md: 6 },
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontFamily: "'Dancing Script', cursive",
              py: 2,
            }}
          >
            Welcome to Soukaina Bakery in Hamburg
          </Typography>

          <Typography sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, mb: 2 }}>
            We are an online bakery that specializes in birthday cakes, wedding
            cakes, and corporate events in Hamburg. We ensure that all custom
            cakes are freshly made and use only the highest quality ingredients.
          </Typography>

          <Typography sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, mb: 2 }}>
            I’m Soukaina, born and raised in Morocco, where the kitchen was
            always the warmest place in the house and my mother was my greatest
            inspiration. I didn’t bake much growing up, but I loved watching her
            cook—mixing spices, tasting as she went, and creating dishes that
            felt like home. Those simple moments taught me to appreciate flavor,
            intuition, and the magic that happens when you cook from the heart.
          </Typography>

          <Typography sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, mb: 2 }}>
            What really excites me is creating recipes, playing with ingredients,
            and discovering combinations that just feel right. This page is
            dedicated to sharing my creativity with you and giving you a glimpse
            into my work.
          </Typography>

          <Typography sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, mb: 2 }}>
            As I grew older, I taught myself how to bake and slowly discovered a
            passion for crafting cakes and experimenting with new designs. My
            inspiration comes from everywhere—my own imagination, the people
            around me, and the friends and customers who trust me to bring their
            ideas to life. I’ve always loved art in all its forms, and cake
            design became the perfect way for me to blend that love with my
            passion for flavor.
          </Typography>

          <Typography sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, mb: 2 }}>
            As we embrace new online platforms, we invite you to explore our
            website, discover our diverse array of offerings, and embark on a
            journey of flavors and designs. Thank you for choosing Soukaina
            Bakery — where every bite tells a story, and every celebration is
            made sweeter. ❤️
          </Typography>

          <Typography sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, mb: 2 }}>
            At Soukaina Bakery, we enjoy creating healthier recipes with reduced
            fat, focusing on both taste and the quality of the ingredients we
            use. For us, a cake should not only look beautiful—it should also
            feel good to eat.
          </Typography>

          <Typography sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, mb: 2 }}>
            For those who may not consider themselves cake enthusiasts, we
            encourage you to experience one of ours; you might just find yourself
            converted. ☺
          </Typography>

          <Typography sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, mb: 2 }}>
            We firmly believe that a visually stunning cake can also deliver an
            exquisite taste. We take pride in designing intricate cake creations
            and continually staying abreast of trends to bring you the finest
            and most contemporary cake designs.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
