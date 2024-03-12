import type React from "react";
import { useRef, useEffect } from "react";
import "./GoogleSearchForm.scss";

const GoogleSearchForm: React.FC = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	function search(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const query = formData.get("query");
		document.location.href = `https://www.google.com/search?q=${query}`; // TODO use encodeURIComponent
	}

	return (
		<div>
			<form onSubmit={search}>
				<input name="query" ref={inputRef} placeholder="Search Google" />
			</form>
		</div>
	);
};

export default GoogleSearchForm;
