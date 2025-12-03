import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

function StationItem({ station }) {
    const { name, empty_slots, free_bikes, latitude, longitude } = station;

    const handleOpenGoogleMaps = () => {
        const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        window.open(url, "_blank");
    };

    return (
        <Card className="station-card" sx={{ mb: 2 }}>
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1, textAlign: "center" }}>
            <div style={{ flexGrow: 1 }}>
            <Typography variant="h6">{name}</Typography>
            <Typography>Bicicletas disponibles: {free_bikes}</Typography>
            <Typography>Espacios libres: {empty_slots}</Typography>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" color="primary" onClick={handleOpenGoogleMaps} sx={{ mt: 2 }}>
                VER EN GOOGLE MAPS
            </Button>
            </div>
        </CardContent>
        </Card>
    );
}

export default StationItem;