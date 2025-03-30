import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function BigSearchForm() {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        navigate(`${inputValue}/1`);
    }

    return (
        <SearchForm handleSubmit={handleSubmit} formClass="big-search-form">
            <input
                required
                type="search"
                id="search-input"
                name="search-input"
                placeholder="Search..."
                value={inputValue}
                onChange={(e) => setInputValue(e.currentTarget.value)}
            />
            <button type="submit">Search in Gogle</button>
        </SearchForm>
    );
}
