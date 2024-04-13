import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";

describe("Header Test Case", () => {

  test("it should load Header Component with a login button", ()=> {
    render(
    	<BrowserRouter>
      	<Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

		const loginButton = screen.getByRole("button", {name: "Login"});
		expect(loginButton).toBeInTheDocument();
    });

		test("it should load Header Component with cart items 0", ()=> {
			render(
				<BrowserRouter>
					<Provider store={appStore}>
						<Header />
					</Provider>
				</BrowserRouter>
			);
	
			const cartText = screen.getByText("Cart (0 items)");
			expect(cartText).toBeInTheDocument();
			});

			test("it should change login button to logout on click", ()=> {
				render(
					<BrowserRouter>
						<Provider store={appStore}>
							<Header />
						</Provider>
					</BrowserRouter>
				);
		
				const loginButton = screen.getByRole("button", {name : "Login"});
				expect(loginButton).toBeInTheDocument();

				fireEvent.click(loginButton);
				const logoutButton = screen.getByRole("button", {name : "Logout"});
				expect(logoutButton).toBeInTheDocument();
				});
});