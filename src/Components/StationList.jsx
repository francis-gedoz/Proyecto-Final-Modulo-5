import React from "react";
import StationItem from "./StationItem";

function StationList({ stations }) {
    return (
        <div className="cards-grid">
        {stations.map((station) => (
            <StationItem key={station.id} station={station} />
        ))}
        </div>
    );
}

export default StationList;