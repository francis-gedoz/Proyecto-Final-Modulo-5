import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/UseFetch";
import { Container, Typography } from "@mui/material";
import StationList from "../Components/StationList";

function StationsPage() {
    const { id } = useParams();

    const { data, loading, error } = useFetch(`https://api.citybik.es/v2/networks/${id}`);

    if (loading) return <p>⌛ Cargando estaciones ⌛</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Container sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" sx={{ mb: 2 }}>
            Estaciones Disponibles
        </Typography>
        <StationList stations={data.network.stations} />
        </Container>
    );
}

export default StationsPage;