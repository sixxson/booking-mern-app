import { test, expect } from "@playwright/test";
import path from "path";

const UI_URL = "http://localhost:5174/";

test.beforeEach(async ({ page }) => {
    await page.goto(UI_URL);

    // get the sign in button
    await page.getByRole("link", { name: "Sign In" }).click();

    await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();

    await page.locator("[name=email]").fill("1@1.com");
    await page.locator("[name=password]").fill("123qwe");

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.getByText("Sign in Successful!")).toBeVisible();
});




test("should allow user to add a hotel", async ({ page }) => {
    await page.goto(`${UI_URL}add-hotel`);

    await page.locator('[name="name"]').fill("Test Hotel");
    await page.locator('[name="city"]').fill("Test City");
    await page.locator('[name="country"]').fill("Test Country");
    await page
        .locator('[name="description"]')
        .fill("Lorem ipsum dolor sit amet");
    await page.locator('[name="pricePerNight"]').fill("100");
    await page.selectOption('select[name="starRating"]', "3");

    await page.getByText("Budget").click();

    await page.getByLabel("Free Wifi").check();
    await page.getByLabel("Parking").check();

    await page.locator('[name="adultCount"]').fill("2");
    await page.locator('[name="childCount"]').fill("2");

    await page.setInputFiles('[name="imageFiles"]', [
        path.join(__dirname, "image", "1.jpg"),
        path.join(__dirname, "image", "2.jpg"),
    ]);

    await page.getByRole("button", { name: "Create Hotel" }).click();
    await page.waitForTimeout(3000); // Add a delay of 10 second
    await expect(page.getByText("Hotel added successfully!")).toBeVisible();
});

test("should display hotel", async ({ page }) => {
    await page.goto(`${UI_URL}my-hotels`);
    await expect(page.getByRole("heading", { name: "My Hotels" })).toBeVisible();

    await expect(page.getByText("Test Hotel")).toBeVisible();
    await expect(page.getByText("Lorem ipsum dolor sit amet")).toBeVisible();
    await expect(page.getByText("Test City, Test Country")).toBeVisible();
    await expect(page.getByText("Budget")).toBeVisible();
    await expect(page.getByText("$ 100 preson night")).toBeVisible();
    await expect(page.getByText("2 Adults, 2 Childrens")).toBeVisible();
    await expect(page.getByText("3 Star Rating")).toBeVisible();

    await expect(page.getByRole("link", { name: "View Hotel" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Add Hotel" })).toBeVisible();

});