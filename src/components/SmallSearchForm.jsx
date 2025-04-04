import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function SmallSearchForm() {
    const { request, start, safe } = useParams();

    const [safeValue, setSafeValue] = useState(safe === "safe");
    const [inputValue, setInputValue] = useState(request || "");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        navigate(`/${inputValue}/1/${safeValue || ""}`);
    }
    function handleCheckbox(e) {
        setSafeValue(e.currentTarget.checked);
        navigate(
            `/${request}/${start}/${e.currentTarget.checked ? "safe" : ""}`
        );
    }

    return (
        <SearchForm
            navClass="small-nav"
            formClass="small-form"
            handleSubmit={handleSubmit}
        >
            <input
                required
                type="search"
                id="search-input"
                name="search-input"
                placeholder="Search..."
                value={inputValue}
                onChange={(e) => setInputValue(e.currentTarget.value)}
            />
            <div>
                <label htmlFor="safe-search">Safe Mode</label>

                <label className="safe-search-label" htmlFor="safe-search">
                    <input
                        type="checkbox"
                        className="safe-search-check"
                        name="safe-search"
                        checked={safeValue}
                        onChange={handleCheckbox}
                        id="safe-search"
                    />
                </label>
            </div>
        </SearchForm>
    );
}
