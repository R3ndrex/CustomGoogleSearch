import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        navigate(`${inputValue}/0`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <strong>Gogle</strong>
            <input
                required
                type="search"
                id="search-input"
                name="search-input"
                placeholder="Enter search value"
                value={inputValue}
                onChange={(e) => setInputValue(e.currentTarget.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
}
