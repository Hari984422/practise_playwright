import test, { expect } from "@playwright/test";
import LoginPage from "../PageObjectModel/loginPage.page";
import fs from 'fs'
import path from "path";
import QspiderSignUp from "../PageObjectModel/QspiderSigUpPage";
import HomeProducts from "../PageObjectModel/HomePage";
import CheckOut from "../PageObjectModel/CheckOut";

let dataFile = fs.readFileSync(path.join(__dirname,'../DDT/data.json'));
let data = JSON.parse(dataFile);

test("end to end Sauce Demo",async ({page}) => {
let Login1 = new LoginPage(page);
let HomePage = new HomeProducts(page);
let CheckOutPage = new CheckOut(page);
  // login to home page
  await page.goto('https://www.saucedemo.com/')
  
    // await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
  // validate login
  //   console.log(data);
   await Login1.setLogIn(data.validData[0].username,data.validData[0].password);
    await expect(await page.url()).toBe("https://www.saucedemo.com/inventory.html")
  //  add all items into the cart
   await HomePage.validateItem(page);

  //  check out the products
  await CheckOutPage.checkOutPro()
    
  })