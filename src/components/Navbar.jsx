import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

export default function Navbar() {
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/store");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        color: "#333",
        zIndex: 1100,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 4 }}>
        {/* Logo */}
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "#2fba4d",
            fontWeight: 700,
            letterSpacing: "1px",
          }}
        >
          MyStore
        </Typography>

        {/* Navigation */}
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          {["Home", "Store", "About", "Location", "Contact"].map((item) => (
            <Button
              key={item}
              component={Link}
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              sx={{
                color: "#333",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  color: "#2fba4d",
                  backgroundColor: "rgba(47,186,77,0.1)",
                },
              }}
            >
              {item}
            </Button>
          ))}

          {/* Search Button */}
          <IconButton onClick={handleSearchSubmit} color="inherit">
            <SearchIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
