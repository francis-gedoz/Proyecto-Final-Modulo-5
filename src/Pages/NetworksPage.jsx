import React from "react";
import { Container, Typography } from "@mui/material";
import useFetch from "../Hooks/UseFetch";
import NetworkList from "../Components/NetworkList";

function NetworksPage() {
    const { data, loading, error } = useFetch("https://api.citybik.es/v2/networks");

    if (loading) return <p>⌛ Cargando redes ⌛</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Container sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" sx={{ mb: 2 }}>
            Redes Globales
        </Typography>

        <NetworkList networks={data.networks} />
        </Container>
    );
}

export default NetworksPage;