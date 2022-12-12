import HamburgerMenu from "./HamburgerMenu";
import { fireEvent, render, screen } from "@testing-library/react";

describe(HamburgerMenu, () => {
  it("Hamburger menu icon updates correctly", async () => {
    render(<HamburgerMenu />);
    const MenuButton = screen.getByRole("button");

    fireEvent.click(MenuButton);
    await screen.findByTestId("close");
    fireEvent.click(MenuButton);
    await screen.findByTestId("open");
  });
});
