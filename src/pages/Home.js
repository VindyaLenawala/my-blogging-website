import React from "react";
import BlogCard from "../components/BlogCard";
import { Grid, Box, Typography, Chip, Link } from "@mui/material";

const Home = () => {
  const categories = [
    "Photography",
    "Programming",
    "Baking",
    "Blockchain",
    "Sports",
    "Cybersecurity",
    "Personal Development",
    "Mental Health",
    "Fitness",
  ];

  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/* Left Section - Blogs */}
      <Box sx={{ flex: 2, marginRight: "20px" }}>
        <Typography variant="h6" gutterBottom>
          Home
        </Typography>
        {[...Array(3)].map((_, index) => (
          <BlogCard
            key={index}
            title="How to Cultivate a Minimalist Lifestyle"
            date="Dec 10, 2024"
            author="Olivia Stone"
            category="Travel"
            likes={3}
          />
        ))}
        <Link href="#" underline="hover" sx={{ marginTop: "10px" }}>
          Load More
        </Link>
      </Box>

      {/* Right Section - Categories and Trending */}
      <Box sx={{ flex: 1 }}>
        {/* Popular Categories */}
        <Typography variant="h6" gutterBottom>
          Popular Categories
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {categories.map((cat) => (
            <Chip key={cat} label={cat} color="primary" />
          ))}
        </Box>

        {/* Trending */}
        <Box sx={{ marginTop: "30px" }}>
          <Typography variant="h6" gutterBottom>
            Trending
          </Typography>
          {[1, 2, 3, 4, 5].map((num) => (
            <Box
              key={num}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Box>
                <Typography variant="h6">{'0${num}'}</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1">
                  How to Cultivate a Minimalist Lifestyle
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Olivia Stone | Dec 10, 2024
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;