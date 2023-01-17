import CrimeItem from "./CrimeItem";

export default function CrimeList({ crimes }) {
    return (
        <ul className="crime-list">
            {crimes.length > 0 && crimes.map((crime, index) => {
                return (
                    <CrimeItem key={index} crime={crime} />
                )
            })}
        </ul>
    );
}