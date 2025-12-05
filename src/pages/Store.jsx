import React, { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const products = [
  { name: "Futbol Cake", price: "€60.00", image: "/Cake (1).jpeg", category: "cake" },
  { name: "Butterfly Cake", price: "€60.00", image: "/Cake  (2).jpeg", category: "cake" },
  { name: "Flower Cake", price: "€50.00", image: "/Cake  (8).jpeg", category: "cake" },
  { name: "Pistachio Cake", price: "€79.00", image: "/Cake  (5).jpeg", category: "cake" },
  { name: "IT Cake", price: "€89.50", image: "/Cake  (7).jpeg", category: "cake" },
  { name: "Alphabet Cake", price: "€49.50", image: "/Cake  (10).jpeg", category: "cake" },
  { name: "Superman Cake", price: "€39.50", image: "/Cake (9).jpeg", category: "cake" },
  { name: "Fruit Cake", price: "€49.50", image: "/Cake  (8).jpeg", category: "cake" },
  { name: "Flower Birthday Cake", price: "€59.50", image: "/Cake  (4).jpeg", category: "cake" },
  { name: "Chocolate Birthday Cake", price: "€59.50", image: "/cake(11).jpeg", category: "cake" },
  { name: "Funny Cake", price: "€38.50", image: "/cake(12).jpeg", category: "cake" },
];

export default function Store() {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) => {
    const matchesCategory = category === "all" || p.category === category;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, mt: 12 }}>
      {/* Filter controls */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4, justifyContent: "center" }}>
        <TextField
          label="Search cakes by name..."
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
        />
        {["all", "cupcake", "cake"].map((cat) => (
          <Button
            key={cat}
            variant={category === cat ? "contained" : "outlined"}
            onClick={() => setCategory(cat)}
            sx={{ textTransform: "capitalize" }}
          >
            {cat}
          </Button>
        ))}
      </Box>

      {/* Product grid */}
      <Typography variant="h4" textAlign="center" mb={3}>
        Tortas
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
          gap: 3,
        }}
      >
        {filteredProducts.map((product) => (
          <Box
            key={product.name}
            sx={{
              border: "1px solid #f7f7f7",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 2,
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.02)", boxShadow: 5 },
              backgroundColor: "#fff",
            }}
          >
            <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
              <Box
                component="img"
                src={product.image}
                alt={product.name}
                sx={{ width: "100%", height: 200, objectFit: "cover" }}
              />
              <Box sx={{ p: 2, textAlign: "center" }}>
                <Typography fontWeight="bold">{product.name}</Typography>
                <Typography>{product.price}</Typography>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ mt: 1, textTransform: "none" }}
                >
                  Buy Now!
                </Button>
              </Box>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
