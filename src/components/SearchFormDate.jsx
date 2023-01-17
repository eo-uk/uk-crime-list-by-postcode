import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SearchFormDate({ date, setDate }) {
    return (
        <DatePicker
            dateFormat="MMMM yyyy"
            showMonthYearPicker
            selected={date}
            onChange={(date) => setDate(date)}
            maxDate={new Date()}
        />
    );
}