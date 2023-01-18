import { useState } from "react";

import CrimeList from "./CrimeList";
import CrimeMap from "./CrimeMap";
import SearchForm from "./SearchForm";

export default function CrimeComponent() {
    const [crimes, setCrimes] = useState([]);
    
    return (
        <div className="crime-checker">
            <SearchForm setCrimes={setCrimes} />
            <CrimeMap crimes={crimes} />
            <CrimeList crimes={crimes} />
        </div>
    );
}