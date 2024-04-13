import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import Mock_Rest_List from "../../utils/__mocks__/restaurantListMock.json";
import { act } from "react-dom/test-utils";


describe("Restaurant List Page search Test Case", () => {
	global.fetch = jest.fn(() => {
		return Promise.resolve({
			json: () => {
				return Promise.resolve(Mock_Rest_List);
			},
		});
	});

  test("it searches from the list of restaurants", async() => {
  	await act(async () => render(
    	<BrowserRouter>
      	<Body/>
      </BrowserRouter>
			));

			const restCards = screen.getAllByTestId("resCard");
			expect(restCards.length).toBe(20);

			const searchInput = screen.getByTestId("searchInput");
			const searchBtn = screen.getByRole("button", { name: "Search" });

			fireEvent.change(searchInput, {target : {value : "Pizza"}});
			fireEvent.click(searchBtn);

			const cardsAfterSearch = screen.getAllByTestId("resCard");
			expect(cardsAfterSearch.length).toBe(2);
	});

	test("it filters top rated restaurants", async() => {
  	await act(async () => render(
    	<BrowserRouter>
      	<Body/>
      </BrowserRouter>
			));

			const restCards = screen.getAllByTestId("resCard");
			expect(restCards.length).toBe(20);

			const filterButton = screen.getByTestId("filterRestaurants");

			fireEvent.click(filterButton);

			const cardsAfterFilter = screen.getAllByTestId("resCard");
			expect(cardsAfterFilter.length).toBe(9);
	});
});