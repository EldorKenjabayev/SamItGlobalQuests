import React, { useState, useMemo } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Container,
  Box,
} from "@mui/material";

function ItemsList({ data }) {
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchQuery, setSearchQuery] = useState("");
  const filteredAndSortedData = useMemo(() => {
    return data
      .filter(({ title }) =>
        title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => (sortOrder === "asc" ? a.id - b.id : b.id - a.id));
  }, [data, sortOrder, searchQuery]);

  return (
    <Container maxWidth="sm">
      <Box display="flex" gap={2} mb={3}>
        <TextField
          fullWidth
          label="Поиск..."
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          Сортировать по ID {sortOrder === "asc" ? "↓" : "↑"}
        </Button>
      </Box>
      <Box>
        {filteredAndSortedData.length ? (
          filteredAndSortedData.map(({ id, title }) => (
            <Card key={id} sx={{ mb: 1, border: "1px solid #ccc" }}>
              <CardContent>
                <Typography sx={{ mb: 1 }}>{title}</Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography align="center" variant="h6" color="textSecondary">
            Нет данных
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default ItemsList;
