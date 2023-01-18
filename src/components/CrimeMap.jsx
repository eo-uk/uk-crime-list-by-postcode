import { CircleMarker, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import CrimeMapSetter from './CrimeMapSetter';

export default function CrimeMap({ crimes }) {
    const defaultPosition = [51.505, -0.09];
    const radius = 30;
    const zoom = 13;
    
    const lat = crimes[0]?.location.latitude || defaultPosition[0];
    const lon = crimes[0]?.location.longitude || defaultPosition[1];
    const month = crimes[0]?.month;
    const streetName = crimes[0]?.location.street.name;

    return (
        <div className='crime-map'>
            <MapContainer center={[lat, lon]} zoom={zoom} scrollWheelZoom={false}>
                <CrimeMapSetter lat={lat} lon={lon} zoom={zoom} />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {crimes.length > 0 &&
                    <CircleMarker
                        center={[lat, lon]}
                        pathOptions={{color: 'blue'}}
                        radius={radius}
                    >
                        <Popup>
                            <ul className='detail-list'>
                                <li><strong>Date: </strong>{month}</li>
                                <li><strong>Area: </strong>{streetName}</li>
                            </ul>
                        </Popup>
                    </CircleMarker>
                }
            </MapContainer>
        </div>
    )
}