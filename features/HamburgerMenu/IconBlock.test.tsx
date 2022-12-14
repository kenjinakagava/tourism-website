import IconBlock from "./IconBlock";
import { render, screen } from "@testing-library/react";

describe(IconBlock, () => {
  it("Icon block redirects correctly", async () => {
    render(<IconBlock href="https://test.com" />);
    const Link = screen.getByRole("link");

    expect(Link).toHaveAttribute("href", "https://test.com");
  });
});
