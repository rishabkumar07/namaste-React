import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard, { withFlatOffLabel } from "../RestaurantCard";
import mockData from "../../utils/__mocks__/resCardMock.json"

describe("Restaurant Card Test Case", () => {
    test("it should render restaurant card", () => {
        render(<RestaurantCard restListData = {mockData} />);
        const name = screen.getByText("Pizza Hut");
        expect(name).toBeInTheDocument();
    });

    test("it should render Restaurant Card component withFlatOffLabel", () => {
        const RestaurantCardBanner = withFlatOffLabel(RestaurantCard);
        render(<RestaurantCardBanner restListData = {mockData} />); //mockData has discount field
        const name = screen.getByText("Pizza Hut");
        expect(name).toBeInTheDocument();

        const flatOffLabel = screen.getByText("50% OFF Above ...");
        expect(flatOffLabel).toBeInTheDocument();
    });
});