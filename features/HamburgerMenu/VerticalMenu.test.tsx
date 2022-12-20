import { render, fireEvent, getByLabelText } from "@testing-library/react";
import VerticalMenu from "./VerticalMenu";

describe(VerticalMenu, () => {
  it("should navigate to the correct page when clicked", () => {
    const { getByLabelText } = render(<VerticalMenu isOpen={true} />);
    const SavedLink = getByLabelText("View saved locations");
    const RegionsLink = getByLabelText("View our Regions");
    const ExperiencesLink = getByLabelText("Discover experiences in Brazil");
    const DestinationsLink = getByLabelText("Explore destinations in Brazil");
    const SpecialVisaLink = getByLabelText("Learn about special visas");
    const TravelInformationLink = getByLabelText(
      "Get travel information for Brazil"
    );

    fireEvent.click(SavedLink);
    expect(SavedLink).toHaveAttribute("href", "/saved");

    fireEvent.click(RegionsLink);
    expect(RegionsLink).toHaveAttribute("href", "/regions");

    fireEvent.click(ExperiencesLink);
    expect(ExperiencesLink).toHaveAttribute("href", "/experiences");

    fireEvent.click(DestinationsLink);
    expect(DestinationsLink).toHaveAttribute("href", "/destinations");

    fireEvent.click(SpecialVisaLink);
    expect(SpecialVisaLink).toHaveAttribute("href", "/special-visa");

    fireEvent.click(TravelInformationLink);
    expect(TravelInformationLink).toHaveAttribute(
      "href",
      "/travel-information"
    );
  });
});
