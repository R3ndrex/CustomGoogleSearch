import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import IsObjectEmpty from "../utils/IsObjectEmpty";

export default function SearchForm() {
    const params = useParams();
    const [inputValue, setInputValue] = useState("");
    const [safeSearch, setSafeSearch] = useState(false);

    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        if (safeSearch) {
            navigate(`${inputValue}/1/safe`);
        } else {
            navigate(`${inputValue}/1`);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={
                IsObjectEmpty(params) ? "big-search-form" : "small-search-form"
            }
        >
            <strong>
                <Link to="/">
                    <h1>Gogle</h1>
                </Link>
            </strong>
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
            <input
                type="checkbox"
                name="safe-search"
                checked={safeSearch}
                onChange={(e) => setSafeSearch(e.currentTarget.checked)}
                id="safe-search"
            />
        </form>
    );
}
