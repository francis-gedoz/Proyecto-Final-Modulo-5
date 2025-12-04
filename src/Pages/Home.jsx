import React from "react";
import { Container, Typography } from "@mui/material";
import bike from "../assets/bike.png";

function Home() {
    return (
        <Container sx={{ mt: 4, textAlign: "center" }}>
        <style>
            {`
            @keyframes pedal {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-12px); }
                100% { transform: translateY(0px); }
            }
            `}
        </style>

        <Typography variant="h4">Bienvenido a la App de GlobalBikes 🚲</Typography>

        <Typography sx={{ mt: 2 }}>
            Explora redes y estaciones públicas de bicicletas en todo el mundo.
        </Typography>

        <img
            src={bike}
            alt="Bicicleta"
            style={{
            width: "550px",
            marginTop: "40px",
            animation: "pedal 1.4s ease-in-out infinite",
            }}
        />
        </Container>
    );
}

export default Home;