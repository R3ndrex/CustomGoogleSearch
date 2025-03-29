import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import IsObjectEmpty from "../utils/IsObjectEmpty";

export default function SearchForm() {
    const params = useParams();
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        navigate(`${inputValue}`);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={
                IsObjectEmpty(params) ? "big-search-form" : "small-search-form"
            }
        >
            <strong>
                <Link to="/">Gogle</Link>
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
        </form>
    );
}
