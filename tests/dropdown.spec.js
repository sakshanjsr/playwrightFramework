
const{test , expect} = require('@playwright/test')

test("Handle Dropdown @smoke" , async function ({page}) {

    await page.goto("https://www.automationtesting.co.uk/dropdown.html")

    await page.locator("#cars").selectOption({label:"Honda"})     //Label
    await page.waitForTimeout(1000)
    await page.locator("#cars").selectOption({value:"jeep"})      //value
    await page.waitForTimeout(1000)
    await page.locator("#cars").selectOption({index:1})           //index


    await page.waitForTimeout(1000)

    let allCars = await page.$("#cars")
    let cars = await allCars.$$("option")

    for(let i=0 ; i<cars.length ; i++){
        console.log(await cars[i].textContent())
    }



    //Using page.selectOption() is select tag is available
    await page.selectOption("#cars" , "ford")


  

})