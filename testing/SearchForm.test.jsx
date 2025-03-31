import { describe, it, expect, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchForm from "../src/components/SearchForm";

vi.mock("react-router-dom", () => ({
    ...vi.importActual("react-router-dom"),
    Link: vi.fn(),
}));

describe("SearchForm", () => {
    it("calls handleSubmit correctly", async () => {
        const handleSubmit = vi.fn();
        const user = userEvent.setup();
        render(
            <SearchForm handleSubmit={handleSubmit}>
                <input type="text" placeholder="search..." required />
                <button type="submit">Submit</button>
            </SearchForm>
        );

        const input = screen.getByPlaceholderText(/search.../i);

        await user.type(input, "hello kitty");
        await user.click(screen.getByText(/submit/i));

        expect(handleSubmit).toHaveBeenCalled();
    });
    it("doesnt call handleSubmit", async () => {
        const handleSubmit = vi.fn();
        const user = userEvent.setup();
        render(
            <SearchForm handleSubmit={handleSubmit}>
                <input type="text" placeholder="search..." required />
                <button type="submit">Submit</button>
            </SearchForm>
        );

        await user.click(screen.getByText(/submit/i));

        expect(handleSubmit).not.toHaveBeenCalled();
    });

    it("renders correctly", () => {
        const { container } = render(
            <SearchForm>
                <input type="text" placeholder="search..." />
                <button type="submit">Submit</button>
            </SearchForm>
        );
        expect(container).toMatchSnapshot();
    });
});
