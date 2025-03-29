import SearchBlock, { loader as requestLoader } from "./components/SearchBlock";
import App from "./Template";
export const route = [
    {
        path: "",
        element: <App />,
        children: [
            {
                index: true,
            },
            {
                path: ":request/:start?",
                element: <SearchBlock />,
                loader: requestLoader,
            },
        ],
    },
];
