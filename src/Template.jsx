import "./App.css";
import SmallSearchForm from "./components/SmallSearchForm";
import SearchBlock from "./components/SearchBlock";
import Pagination from "./components/Pagination";
import { useLoaderData } from "react-router-dom";

export default function App() {
    const searches = useLoaderData();
    const page = (searches.queries.request[0].startIndex - 1) / 10;
    return (
        <>
            <SmallSearchForm />
            <SearchBlock searches={searches} />
            <Pagination
                nextPageStartIndex={
                    searches.queries.nextPage &&
                    searches.queries.nextPage[0].startIndex
                }
                page={page}
                previousPageStartIndex={
                    searches.queries.previousPage &&
                    searches.queries.previousPage[0].startIndex
                }
            />
        </>
    );
}
