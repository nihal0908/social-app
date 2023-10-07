import { Box } from "@mui/material";
import React from "react";
import { Post } from "./Post";
// import isroquiz from "D:/MUI project/mui-app/src/components/img/isroquiz.jpg";

export const Feed = () => {
  return (
    <Box flex={4}  >
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};
