import "./App.css";
import SmallSearchForm from "./components/SmallSearchForm";
import SearchBlock from "./components/SearchBlock";
import ChangeTitle from "./utils/ChangeTitle";
import Pagination from "./components/Pagination";
import { useLoaderData } from "react-router-dom";

const API_KEY = import.meta.env.VITE_API_KEY;
const cx = import.meta.env.VITE_CX;

export async function loader({ params }) {
    const safe = params.safe ? "active" : "off";
    const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${cx}&q=${params.request}&start=${params.start}&safe=${safe}`
    );
    const searches = await response.json();
    console.log(searches);
    if (searches.queries.request) {
        ChangeTitle(searches.queries.request[0].title);
    }
    return searches;
}

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
