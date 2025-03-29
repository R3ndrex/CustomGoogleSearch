export default function SearchItem({ item }) {
    return (
        <div className="search-item">
            <h2>
                <a href={item.link} target="_blank">
                    {item.title}
                </a>
            </h2>
            <p className="display-link">{item.displayLink}</p>
            <p>{item.snippet}</p>
        </div>
    );
}
