import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./list.scss";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const List = () => {
	const location = useLocation();
	const [destination, setDestination] = useState(location.state.destination);
	const [date, setDate] = useState(location.state.date);
	const [openDate, setOpenDate] = useState(false);
	const [options, setOptions] = useState(location.state.options);

	return (
		<div>
			<Navbar />
			<Header type="list" />
			<div className="listContainer">
				<div className="listWrapper">
					<div className="listSearch">
						<h1 className="listSearchTitle">Search</h1>
						<div className="listSearchItem">
							<label>Destination</label>
							<input placeholder={destination} type="text" />
						</div>
						<div className="listSearchItem">
							<label>Check-in date</label>
							<span onClick={() => setOpenDate(!openDate)}>
								{`${format(
									date[0].startDate,
									"dd/MM/yyyy"
								)} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
							{openDate && (
								<DateRange
									onChange={(item) => setDate([item.selection])}
									minDate={new Date()}
									ranges={date}
								/>
							)}
						</div>
						<div className="listSearchItem">
							<label>Options</label>
							<div className="listSearchOptions">
								<div className="listSearchOptionItem">
									<span className="listOptionText">Min price <small>per night</small> </span>
									<input type="number" className="listSearchOptionInput" />
								</div>
								<div className="listSearchOptionItem">
									<span className="listOptionText">Max price <small>per night</small> </span>
									<input type="number" className="listSearchOptionInput" />
								</div>
								<div className="listSearchOptionItem">
									<span className="listOptionText">Adult</span>
									<input type="number" min={1} className="listSearchOptionInput" placeholder={options.adult} />
								</div>
								<div className="listSearchOptionItem">
									<span className="listOptionText">Children</span>
									<input type="number" min={0} className="listSearchOptionInput" placeholder={options.children} />
								</div>
								<div className="listSearchOptionItem">
									<span className="listOptionText">Room</span>
									<input type="number" min={1} className="listSearchOptionInput" placeholder={options.room} />
								</div>
							</div>
						</div>
						<button>Search</button>
					</div>
					<div className="listResult"></div>
				</div>
			</div>
		</div>
	);
};

export default List;
