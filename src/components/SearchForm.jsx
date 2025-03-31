import { Link } from "react-router-dom";

export default function SearchForm({
    handleSubmit,
    navClass,
    formClass,
    children,
}) {
    return (
        <nav className={navClass}>
            <Link to="/">
                <strong>
                    <h1>Gogle</h1>
                </strong>
            </Link>
            <form onSubmit={handleSubmit} className={formClass}>
                {children}
            </form>
        </nav>
    );
}
