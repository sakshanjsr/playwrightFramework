
const{test , expect} = require('@playwright/test')


//run test in sequence
 test.describe.configure({ mode: 'serial' });


test.beforeEach("Open Url @BeforeEach" , async function ({page}) {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
})


test("Radio Check",async function ({page}) {
    await page.check("//input[@value='radio2']")  
})



test("Enter Text",async function ({page}) {
    await page.fill("//input[@id='autocomplete']" , "hiiiii")
})


test("Alerts",async function ({page}) {

    page.on('dialog' , async (alertWindow) => {
        expect(alertWindow.type()).toContain('alert')
        expect(alertWindow.message()).toContain('Vijay')
        await alertWindow.accept()
   })
  

    await page.fill("//input[@id='name']" , "Vijay")
    await page.locator("//input[@id='alertbtn']").click()

})


test("Mouse Hover", async function ({page}) {
    await page.hover("//button[@id='mousehover']")
    
})



  
