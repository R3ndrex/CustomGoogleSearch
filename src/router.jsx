import Template, { loader as requestLoader } from "./Template";
import BigSearchForm from "./components/BigSearchForm";

export const route = [
    {
        path: "",
        element: <BigSearchForm />,
    },
    {
        path: "/:request/:start/:safe?",
        element: <Template />,
        loader: requestLoader,
    },
];
