import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function NetworkList({ networks }) {
    return (
        <div className="cards-grid">
        {networks.map((net) => (
            <Card
            key={net.id}
            className="network-card"
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                p: 1,
                backgroundColor: "#f0f0f0",
                transition: "0.3s ease",
                "&:hover": {
                backgroundColor: "#e2e2e2",
                boxShadow: 4,
                transform: "translateY(-3px)",
                },
            }}
            >
            <CardContent>
                <Typography variant="h6">{net.name}</Typography>
                <Typography>
                {net.location.city}, {net.location.country}
                </Typography>
            </CardContent>

            <Button
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
                component={Link}
                to={`/stations/${net.id}`}
            >
                VER ESTACIONES
            </Button>
            </Card>
        ))}
        </div>
    );
}

export default NetworkList;