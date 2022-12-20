import { render, fireEvent } from "@testing-library/react";
import VerticalMenu from "./VerticalMenu";

const links = [
  { label: "View saved locations", href: "/saved" },
  { label: "View our Regions", href: "/regions" },
  { label: "Discover experiences in Brazil", href: "/experiences" },
  { label: "Explore destinations in Brazil", href: "/destinations" },
  { label: "Learn about special visas", href: "/special-visa" },
  {
    label: "Get travel information for Brazil",
    href: "/travel-information",
  },
];

describe(VerticalMenu, () => {
  it("should navigate to the correct page when clicked", () => {
    const { getByLabelText } = render(<VerticalMenu isOpen={true} />);

    links.forEach(({ label, href }) => {
      const link = getByLabelText(label);
      fireEvent.click(link);
      expect(link).toHaveAttribute("href", href);
    });
  });
});
