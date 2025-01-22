import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";

export default function RegistrationForm() {
  const [successMessage, setSuccessMessage] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Форма отправлена:", data);
    setSuccessMessage(true);
    reset();
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5, p: 3, border: "1px solid #ccc", borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Регистрация
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Имя"
            fullWidth
            margin="normal"
            {...register("fullName", { required: "Обязательное поле" })}
            error={!!errors.fullName}
            helperText={errors.fullName?.message}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            {...register("email", {
              required: "Обязательное поле",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Некорректный email",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Пароль"
            type="password"
            fullWidth
            margin="normal"
            {...register("password", {
              required: "Обязательное поле",
              minLength: {
                value: 6,
                message: "Пароль слишком короткий (минимум 6 символов)",
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Зарегистрироваться
          </Button>
        </form>
      </Box>
      <Snackbar
        open={successMessage}
        autoHideDuration={3000}
        onClose={() => setSuccessMessage(false)}
      >
        <Alert severity="success">Успешно отправлено!</Alert>
      </Snackbar>
    </Container>
  );
}
