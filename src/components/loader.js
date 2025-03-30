import ChangeTitle from "../utils/ChangeTitle";
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
