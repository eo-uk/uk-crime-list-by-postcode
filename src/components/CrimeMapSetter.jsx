import React, { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function CrimeMapSetter({ lat, lon, zoom }) {
  const map = useMap();

    useEffect(() => {
        map.setView([lat, lon], zoom);
    }, [lat, lon])
  
  return (
    <></>
  );
}
