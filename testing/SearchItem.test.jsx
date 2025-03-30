import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import SearchItem from "../src/components/SearchItem";

const item = {
    title: "Title",
    link: "test-link/test",
    displayLink: "test-link",
    snippet: "bla bla bla",
};

describe("Search Item", () => {
    it("renders correctly", () => {
        const { container } = render(<SearchItem item={item} />);
        expect(container).toMatchSnapshot();
    });
});
