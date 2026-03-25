const {test, expect } = require("allure-playwright");


test("Get Data from Naukri", async function ({page}) {

    await page.goto("https://www.naukri.com/java-selenium-rest-assured-maven-git-jobs-in-hyderabad-secunderabad?k=java%2C%20selenium%2C%20rest%20assured%2C%20maven%2C%20git&l=hyderabad&nignbevent_src=jobsearchDeskGNB&experience=8&jobAge=15")
    await page.waitForLoadState('networkidle')
    //const elements = await page.locator("//li[@class='dot-gt tag-li ']")
    const elements = await page.locator("(//li[@class='dot-gt tag-li '][2])")
    
    const elementsCount =  await elements.count()
    console.log("elements count : "+elementsCount)

    const list = [];

    for(let i=0 ; i<elementsCount ; i++){
        const keywords = await elements.nth(i).textContent()
        //console.log( "text : "+ keywords )
        list.push(keywords)
    }

    console.log(list.length)

})