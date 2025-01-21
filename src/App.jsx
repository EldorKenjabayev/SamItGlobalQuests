import { Box, Button } from "@mui/material";
import { Link } from "react-router";

function App() {
  return (
    <Box sx={{display:'flex', gap:5}}>
      <Link to={"quest-1"}>
        <Button variant="contained" sx={{ width: 200, height: 50 }}>
          Задание 1
        </Button>
      </Link>
      <Link to={"quest-2"}>
        <Button variant="contained" sx={{ width: 200, height: 50 }}>
          Задание 2
        </Button>
      </Link>
    </Box>
  );
}

export default App;
