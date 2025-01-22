import React from "react";
import { Route, Routes } from "react-router";
import ItemsList from "../components/pages/ItemsList";
import { Box } from "@mui/material";
import data from "../constants/constants";
import App from "../App";
import RegistrationForm from "../components/pages/RegistrationForm";

export default function Routers() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/quest-1" element={<ItemsList data={data} />} />
        <Route path="/quest-2" element={<RegistrationForm/>}/>
      </Routes>
    </Box>
  );
}
