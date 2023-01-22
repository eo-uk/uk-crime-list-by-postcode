import { useState } from "react";

import CrimeList from "./CrimeList";
import SearchForm from "./SearchForm";

export default function CrimeComponent() {
    const [crimes, setCrimes] = useState([]);
    
    return (
        <div className="crime-checker">
            <SearchForm crimes={crimes} setCrimes={setCrimes} />
            <CrimeList crimes={crimes} />
        </div>
    );
}