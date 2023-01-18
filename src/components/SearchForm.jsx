import { useEffect, useState } from "react";

import SearchFormDate from "./SearchFormDate";
import SearchCurrentLocation from "./SearchCurrentLocation";
import SearchBar from "./SearchBar";
import SearchCoordsDisplay from "./SearchCoordsDisplay";

export default function SearchForm({setCrimes}) {

    const [message, setMessage] = useState('');
    const [coords, setCoords] = useState({});
    const [postcode, setPostcode] = useState('');
    const [postcodeCorrect, setPostcodeCorrect] = useState(false);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        // UK official postcode re
        const rePostcode = /\b([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})\b$/;

        if (postcode.match(rePostcode)) {
            setPostcodeCorrect(true);
        } else {
            setPostcodeCorrect(false);
        }
        console.log(postcode)
    }, [postcode])

    useEffect(()=>{
        if (coords['latitude'] && coords['longitude']) {
            getCrimes();
        }
    }, [coords])

    function dateToString(date) {
        const year = date.getFullYear();
        let month = date.getMonth() + 1; // 0 indexed months
        month = month < 10 ? '0' + month : month.toString(); // left pad month
        return year + '-' + month;
    }

    function getCrimes() {
        const formattedDate = dateToString(date);
        
        const latitude = coords['latitude'];
        const longitude = coords['longitude'];
        const url = 'https://data.police.uk/api/crimes-at-location?date=' + formattedDate + '&lat=' + latitude + '&lng=' + longitude;

        fetch(url)
        .then(response => {
            if (!response.ok) {
                setMessage('Something went wrong');
                return;
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            if (!data) {
                setMessage('No response');
                throw Error;
            }
            setCrimes(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    function updateCoords() {
        if (!postcode || !postcodeCorrect) {
            return;
        }
        const url = 'https://api.postcodes.io/postcodes/' + postcode;
        fetch(url)
        .then(response => {
            if (!response.ok) {
                setMessage('Something went wrong');
                return;
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            setCoords({
                'latitude': data.result.latitude,
                'longitude': data.result.longitude
            })
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div className='search-form'>
            <h2>UK Crime Lookup by Postcode</h2>
            <form>
                <SearchBar
                    postcode={postcode}
                    setPostcode={setPostcode}
                    postcodeCorrect={postcodeCorrect}
                    updateCoords={updateCoords}
                    setMessage={setMessage}
                />
                <SearchFormDate date={date} setDate={setDate} />
                {/*
                    Disabled due to inconsistent Capacitor API returns
                    <SearchCurrentLocation setCoords={setCoords} setPostcode={setPostcode} />
                */}
            </form>
            
            <p>{message}</p>

            {coords['latitude'] && coords['longitude'] && <SearchCoordsDisplay coords={coords} />}
        </div>
    );
}