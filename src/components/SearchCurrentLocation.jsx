import { Geolocation } from '@capacitor/geolocation';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SearchCurrentLocation({setCoords, setPostcode}) {
    async function getCurrentLocation() {
        return await Geolocation.getCurrentPosition();
    };

    async function handleClick(e) {
        e.preventDefault();
        setPostcode('');

        const currentLocation = await getCurrentLocation();
        setCoords({
            'latitude': currentLocation.coords.latitude.toFixed(6),
            'longitude': currentLocation.coords.longitude.toFixed(6)
        });
    }

    return  (
        <button className='btn-current-location' onClick={handleClick}>
            <FontAwesomeIcon icon={faLocation} style={{marginRight:'1em'}} />
            Check My Location
        </button>
    );
}