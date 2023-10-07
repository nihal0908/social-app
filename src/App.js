import { useState } from "react";
import { Addpost } from "./components/Addpost";
import { Feed } from "./components/Feed";
import { Navbar } from "./components/Navbar";

import { Rightbar } from "./components/Rightbar";
import { Sidebar } from "./components/Sidebar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
export const theme = createTheme({});

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: { mode: mode },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color="text.primary">
        <Navbar />
        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
      <Addpost />
    </ThemeProvider>
  );
}

export default App;
