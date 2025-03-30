import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function SmallSearchForm() {
    const { request, start } = useParams();

    const [safeValue, setSafeValue] = useState();
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (safeValue) {
            navigate(`/${inputValue}/1/safe`);
        } else {
            navigate(`/${inputValue}/1`);
        }
    }
    function handleCheckbox(e) {
        setSafeValue(e.currentTarget.checked);
        navigate(
            `/${request}/${start}/${e.currentTarget.checked ? "safe" : ""}`
        );
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
                checked={safeValue}
                onChange={handleCheckbox}
                id="safe-search"
            />
        </SearchForm>
    );
}
