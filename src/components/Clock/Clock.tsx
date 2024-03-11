import type React from "react";
import { format } from "date-fns";
import { useTime } from "../../hooks/useTime";
import "./Clock.scss";

const Clock: React.FC = () => {
	const time = useTime();
	const timeStr = format(time, "HH:mm:ss");
	const dateStr = format(time, "yyyy/MM/dd");
	return (
		<div>
			<h3>{dateStr}</h3>
			<h1>{timeStr}</h1>
		</div>
	);
};

export default Clock;
