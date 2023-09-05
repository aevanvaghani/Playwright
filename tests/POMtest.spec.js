import { test, expect } from "@playwright/test";
import { LoginPage } from "../node_modules/pages/Loginpage";
import { Homepage } from "../node_modules/pages/Homepage";
import { CartPage } from "../node_modules/pages/CartPage";

test("test", async ({ page }) => {
  //login
  const Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.login("pavanol", "test@123");

  //home
  const Home = new Homepage(page);
  await Home.addProductToCart("Nexus 6");
  await Home.gotoCart();

  //cart
  const Cart = new CartPage(page)
  const status = await Cart.checkProductInCart("Nexus 6")
  expect (await status).toBe(true)
});
