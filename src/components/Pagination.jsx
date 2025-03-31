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
        navigate(`/${request}/${previousPageStartIndex}/${safe || ""}`);
    }

    function handleNextPageClick() {
        navigate(`/${request}/${nextPageStartIndex}/${safe || ""}`);
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
