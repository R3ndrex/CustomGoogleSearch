import SearchItem from "./SearchItem";

export default function SearchBlock({ searches }) {
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
