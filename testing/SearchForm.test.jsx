import { describe, it, expect, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchForm from "../src/components/SearchForm";
import { useNavigate } from "react-router-dom";
vi.mock("react-router-dom", () => ({
    ...vi.importActual("react-router-dom"),
    useNavigate: vi.fn(),
    useParams: vi.fn(),
    Link: vi.fn(),
}));

describe("SearchForm", () => {
    it("renders correctly input value", async () => {
        const user = userEvent.setup();
        render(<SearchForm />);

        const input = screen.getByPlaceholderText(/Enter search value/i);
        await user.type(input, "hello kitty");

        expect(input).toHaveDisplayValue("hello kitty");
    });

    it("navigates to correct path", async () => {
        const navigate = vi.fn();
        const user = userEvent.setup();
        useNavigate.mockReturnValue(navigate);
        render(<SearchForm />);

        const input = screen.getByPlaceholderText(/Enter search value/i);
        await user.type(input, "hello");
        await user.click(screen.getByText(/Search/i));

        expect(navigate).toBeCalledWith("hello/1");
    });
});
