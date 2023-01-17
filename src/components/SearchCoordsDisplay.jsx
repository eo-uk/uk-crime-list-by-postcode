export default function SearchCoordsDisplay({ coords }) {
    return (
        <ul className="coords-display">
            <li>
                <strong>Latitude:</strong>
                <span className="coord">{coords['latitude']}</span>
            </li>
            <li>
                <strong>Longitude:</strong>
                <span className="coord">{coords['longitude']}</span>
            </li>
        </ul>
    )
}