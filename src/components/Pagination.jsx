import { useNavigate, useParams } from "react-router-dom";

export default function Pagination({
    nextPageStartIndex,
    previousPageStartIndex,
    page,
}) {
    const { request } = useParams();
    const navigate = useNavigate();
    function handlePreviousPageClick() {
        navigate(`/${request}/${previousPageStartIndex}`);
        window.scrollTo(0, 0);
    }

    function handleNextPageClick() {
        navigate(`/${request}/${nextPageStartIndex}`);
        window.scrollTo(0, 0);
    }

    return (
        <div className="pagination">
            {previousPageStartIndex && (
                <button onClick={handlePreviousPageClick}>Previous page</button>
            )}
            <span data-testid="span-page">{page}</span>
            {nextPageStartIndex && (
                <button onClick={handleNextPageClick}>Next page</button>
            )}
        </div>
    );
}
