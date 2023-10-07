import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

export const Post = () => {
  return (
    <Box>
      <Card sx={{margin:3}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="Settings">
              <MoreVert />
            </IconButton>
          }
          title="Nikki and Porto"
          subheader="Dec 12, 2012"
        />
        <CardMedia
          component={"img"}
          height={"20%"}
          image="https://images.unsplash.com/photo-1505968409348-bd000797c92e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
        />
        <CardContent>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            consequuntur nesciunt laudantium quibusdam delectus nisi. Impedit
            non deserunt et officiis atque consectetur, perferendis minima ullam
            totam! Adipisci doloremque perspiciatis voluptatum!
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorite">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};
