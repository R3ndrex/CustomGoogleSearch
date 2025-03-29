import { useNavigate, useParams } from "react-router-dom";

export default function Pagination({
    nextPageStartIndex,
    previousPageStartIndex,
    page,
}) {
    const { request } = useParams();
    const navigate = useNavigate();
    function handlePreviousPageClick() {
        if (previousPageStartIndex) {
            navigate(`/${request}/${previousPageStartIndex}`);
            window.scrollTo(0, 0);
        }
    }

    function handleNextPageClick() {
        if (nextPageStartIndex) {
            navigate(`/${request}/${nextPageStartIndex}`);
            window.scrollTo(0, 0);
        }
    }

    return (
        <div>
            <button onClick={handlePreviousPageClick}>Previous page</button>
            <span data-testid="span-page">{page}</span>
            <button onClick={handleNextPageClick}>Next page</button>
        </div>
    );
}
