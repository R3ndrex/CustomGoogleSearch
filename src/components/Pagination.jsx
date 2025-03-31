import { useNavigate, useParams } from "react-router-dom";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function Pagination({
    nextPageStartIndex,
    previousPageStartIndex,
    page,
}) {
    const { request, safe } = useParams();
    const navigate = useNavigate();
    function handlePreviousPageClick() {
        if (safe) {
            navigate(`/${request}/${previousPageStartIndex}/safe`);
        } else {
            navigate(`/${request}/${previousPageStartIndex}`);
        }
        window.scrollTo(0, 0);
    }

    function handleNextPageClick() {
        if (safe) {
            navigate(`/${request}/${nextPageStartIndex}/safe`);
        } else {
            navigate(`/${request}/${nextPageStartIndex}`);
        }
        window.scrollTo(0, 0);
    }

    return (
        <section className="pagination">
            {previousPageStartIndex && (
                <ChevronLeftIcon
                    className="icon"
                    onClick={handlePreviousPageClick}
                />
            )}
            <span data-testid="span-page">{page}</span>
            {nextPageStartIndex && (
                <ChevronRightIcon
                    className="icon"
                    onClick={handleNextPageClick}
                />
            )}
        </section>
    );
}
