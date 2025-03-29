import "./App.css";
import SearchForm from "./components/SearchForm";
import { Outlet } from "react-router-dom";
function App() {
    return (
        <>
            <SearchForm />
            <Outlet />
        </>
    );
}

export default App;
