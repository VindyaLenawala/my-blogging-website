import React from "react";
import { Card, CardContent, Typography, Box, Chip, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const BlogCard = ({ title, date, author, category, likes }) => {
  return (
    <Card sx={{ display: "flex", marginBottom: "20px", boxShadow: 3 }}>
      {/* Placeholder Image */}
      <Box
        component="img"
        src="https://via.placeholder.com/150" // Replace with your actual image
        alt="Blog Thumbnail"
        sx={{ width: 150, height: 150, objectFit: "cover" }}
      />
      {/* Content */}
      <CardContent sx={{ flex: 1 }}>
        <Chip label={category} color="primary" size="small" sx={{ mb: 1 }} />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {author} | {date}
        </Typography>
        <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
          <FavoriteIcon color="error" fontSize="small" />
          <Typography variant="body2" sx={{ ml: 1 }}>
            {likes}
          </Typography>
          <Box sx={{ ml: "auto" }}>
            <Button size="small" color="primary">
              Read More
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogCard;