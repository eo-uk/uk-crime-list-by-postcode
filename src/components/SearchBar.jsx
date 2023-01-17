export default function SearchBar({ postcode, setPostcode, postcodeCorrect, updateCoords, setMessage }) {
    
    function handleSubmit(e) {
        e.preventDefault();
        setMessage('');
        updateCoords();
    }

    return (
        <div>
            <div className="search-bar">
                <input
                    type='text'
                    name={'postcode'}
                    id={'postcode'}
                    placeholder={'Postcode'}
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                />
                <div>
                    <input type="submit" value="Search" onClick={handleSubmit} />
                </div>
                
            </div>
            <small style={{color: 'red'}}>
                {postcode && !postcodeCorrect && 'Please enter a valid postcode'}
            </small>
        </div>
    )
}