import React, { useEffect } from "react";

import { useMap, useMapEvents } from "react-leaflet";

export default function CrimeMapSetter({ lat, lon, zoom, handleMapClick }) {
    // useMap only worked inside a child component
    const map = useMap();

    const mapEvents = useMapEvents({
        click: (e) => handleMapClick(e.latlng),
    });

    useEffect(() => {
        map.setView([lat, lon], zoom);
    }, [lat, lon])
  
    return (
        <></>
    );
}
