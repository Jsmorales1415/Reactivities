import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import {
  AppBar,
  Box,
  IconButton,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  const [activities, setActivities] = useState<[]>();

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Activities
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <List>
        {activities?.map((activity: any) => (
          <Typography variant="subtitle1"> {activity.title} </Typography>
        ))}
      </List>
    </div>
  );
}

export default App;
