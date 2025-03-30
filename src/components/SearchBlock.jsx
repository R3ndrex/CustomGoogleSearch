import { useLoaderData } from "react-router-dom";
import Pagination from "./Pagination";
import SearchItem from "./SearchItem";

const API_KEY = import.meta.env.VITE_API_KEY;
const cx = import.meta.env.VITE_CX;

export async function loader({ params }) {
    const safe = params.safe ? "active" : "off";
    const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${cx}&q=${params.request}&start=${params.start}&safe=${safe}`
    );
    const searches = await response.json();
    console.log(searches);
    return searches;
}

export default function SearchBlock() {
    const searches = useLoaderData();
    const page = (searches.queries.request[0].startIndex - 1) / 10;
    return (
        <>
            <section className="item-block">
                {searches.items &&
                    searches.items.map((item) => (
                        <SearchItem key={item.link} item={item} />
                    ))}
            </section>
            <section>
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
            </section>
        </>
    );
}
