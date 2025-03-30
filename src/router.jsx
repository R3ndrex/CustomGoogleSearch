import Template from "./Template";
import { loader as requestLoader } from "./components/loader";
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
