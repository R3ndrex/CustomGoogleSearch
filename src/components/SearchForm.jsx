import { Link } from "react-router-dom";

export default function SearchForm({
    handleSubmit,
    navClass,
    formClass,
    children,
}) {
    return (
        <nav className={navClass}>
            <form onSubmit={handleSubmit} className={formClass}>
                <strong>
                    <Link to="/">
                        <h1>Gogle</h1>
                    </Link>
                </strong>
                {children}
            </form>
        </nav>
    );
}
