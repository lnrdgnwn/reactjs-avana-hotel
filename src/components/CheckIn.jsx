import { useState } from "react";

import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import '../datepicker.css';

import { BsCalendar } from "react-icons/bs";

function CheckIn() {
    const [startDate, setStartDate] = useState(null);

    return (
        <div className="relative flex items-center justify-end w-full h-full">
            <div className="absolute right-0 z-10 pr-8">
                <BsCalendar className="text-accent text-base" />
            </div>
            <DatePicker
                className="w-full h-full"
                selected={startDate}
                placeholderText="Check in"
                onChange={(date) => setStartDate(date)}
            />
        </div>
    );
}

export default CheckIn;