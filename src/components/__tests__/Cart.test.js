import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA_NAME from "../../utils/__mocks__/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

//   const accordionHeader = screen.getByText(/Premium/);
//   expect(accordionHeader.length).toBe(1);
//   fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(7);
  screen.debug();
  const cart = screen.getByTestId("cart");

  expect(cart).toBeInTheDocument();

  let cartText = cart.textContent.trim();
  expect(cartText).toBe("Cart (0 items)");

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  cartText = cart.textContent.trim();
  expect(cartText).toBe("Cart (1 items)");

  fireEvent.click(addBtns[1]);

  cartText = cart.textContent.trim();
  expect(cartText).toBe("Cart (2 items)");

  expect(screen.getAllByTestId("foodItems").length).toBe(9);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(7);

  expect(screen.getByText("Cart is empty. Add Items to the cart!")).toBeInTheDocument();
});