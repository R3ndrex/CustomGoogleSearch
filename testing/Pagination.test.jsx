import { describe, it, expect, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pagination from "../src/components/Pagination";
import { useNavigate, useParams } from "react-router-dom";

vi.mock("react-router-dom", () => ({
    ...vi.importActual("react-router-dom"),
    useParams: vi.fn(),
    useNavigate: vi.fn(),
}));

describe("Pagination", () => {
    it("calls navigation to desired page on previous page click", async () => {
        const navigate = vi.fn();
        useNavigate.mockReturnValue(navigate);
        useParams.mockReturnValue({ request: "requestTest" });
        const user = userEvent.setup();
        render(
            <Pagination
                nextPageStartIndex={11}
                previousPageStartIndex={1}
                page={5}
            />
        );

        await user.click(screen.getByTestId(/previous/i));

        expect(navigate).toBeCalledWith(`/requestTest/1/`);
    });

    it("calls navigation to desired page on next page click", async () => {
        const navigate = vi.fn();
        useNavigate.mockReturnValue(navigate);
        useParams.mockReturnValue({ request: "requestTest" });
        const user = userEvent.setup();
        render(
            <Pagination
                nextPageStartIndex={11}
                previousPageStartIndex={1}
                page={5}
            />
        );

        await user.click(screen.getByTestId(/next/i));

        expect(navigate).toBeCalledWith(`/requestTest/11/`);
    });

    it("calls navigation to desired page on click with safe", async () => {
        const navigate = vi.fn();
        useNavigate.mockReturnValue(navigate);
        useParams.mockReturnValue({ request: "requestTest", safe: "safe" });
        const user = userEvent.setup();
        render(
            <Pagination
                nextPageStartIndex={11}
                previousPageStartIndex={1}
                page={5}
            />
        );

        await user.click(screen.getByTestId(/next/i));

        expect(navigate).toBeCalledWith(`/requestTest/11/safe`);
    });

    it("renders page number correctly", () => {
        render(
            <Pagination
                nextPageStartIndex={11}
                previousPageStartIndex={1}
                page={5}
            />
        );

        expect(screen.getByTestId("span-page")).toHaveTextContent(5);
    });
});
