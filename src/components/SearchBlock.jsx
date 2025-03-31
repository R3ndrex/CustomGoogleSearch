import { useEffect } from "react";
import SearchItem from "./SearchItem";

export default function SearchBlock({ searches }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <>
            <section className="item-block">
                {searches.items &&
                    searches.items.map((item) => (
                        <SearchItem key={item.link} item={item} />
                    ))}
            </section>
        </>
    );
}
