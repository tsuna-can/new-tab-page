import type React from "react";
import { format } from "date-fns";
import { useTime } from "../../hooks/useTime";
import "./Clock.scss";

const Clock: React.FC = () => {
	const time = useTime();
	const hour = format(time, "HH");
	const minute = format(time, "mm");
	const second = format(time, "ss");
	const dateStr = format(time, "yyyy/MM/dd");

	return (
		<div className="clock">
			<p className="date-string">{dateStr}</p>
			<div className="time">
				<div className="time-string">
					<p className="number">{hour}</p>
					<p>:</p>
					<p className="number">{minute}</p>
					<p>:</p>
					<p className="number">{second}</p>
				</div>
			</div>
		</div>
	);
};

export default Clock;
