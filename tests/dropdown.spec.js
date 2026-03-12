
const{test , expect} = require('@playwright/test')

test("Handle Dropdown" , async function ({page}) {

    await page.goto("https://www.automationtesting.co.uk/dropdown.html")

    await page.locator("#cars").selectOption({label:"Honda"})
    await page.waitForTimeout(1000)
    await page.locator("#cars").selectOption({value:"jeep"})
    await page.waitForTimeout(1000)
    await page.locator("#cars").selectOption({index:1})


    await page.waitForTimeout(1000)

    let allCars = await page.$("#cars")
    let cars = await allCars.$$("option")

    for(let i=0 ; i<cars.length ; i++){
        console.log(await cars[i].textContent())
    }

})