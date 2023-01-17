export default function CrimeItem({crime}) {

    function formatCategory(category) {
        const words = category.split('-');
        for (let i=0; i<words.length; i++) {
            let word = words[i];
            words[i] = word[0].toUpperCase() + word.slice(1);
        }
        return words.join(' ');
    }

    return (
        <li className="crime-item">
            <h3>{formatCategory(crime.category)}</h3>
            <ul className="detail-list">
                <li>
                    <strong>Date: </strong>
                    {crime.month}
                </li>
                <li>
                    <strong>Street: </strong>
                    {crime.location.street.name}
                </li>
                {crime.context &&
                    <li>
                        <strong>Context: </strong>
                        {crime.context}
                    </li>
                }
                <li>
                    <strong>Outcome: </strong>
                    {crime.outcome_status?.category || 'No Outcome Found'}
                </li>
            </ul>
        </li>
    );
}