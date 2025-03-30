import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function SmallSearchForm() {
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
        <SearchForm navClass="small-nav" handleSubmit={handleSubmit}>
            <input
                required
                type="search"
                id="search-input"
                name="search-input"
                placeholder="Search..."
                value={inputValue}
                onChange={(e) => setInputValue(e.currentTarget.value)}
            />
            <input
                type="checkbox"
                name="safe-search"
                checked={safeSearch}
                onChange={(e) => setSafeSearch(e.currentTarget.checked)}
                id="safe-search"
            />
        </SearchForm>
    );
}
