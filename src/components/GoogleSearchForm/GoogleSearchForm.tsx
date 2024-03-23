import type React from "react";
import "./GoogleSearchForm.scss";

const GoogleSearchForm: React.FC = () => {
	function search(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const query = formData.get("query");
		document.location.href = `https://www.google.com/search?q=${query}`; // TODO use encodeURIComponent
	}

	return (
		<div>
			<form onSubmit={search} className="form">
				<input name="query" placeholder="Search Google" className="input" />
			</form>
		</div>
	);
};

export default GoogleSearchForm;
