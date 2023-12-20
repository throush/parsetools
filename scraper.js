const puppeteer = require('puppeteer');

async function scrapeWebsite() {
   // Launch the browser
   const browser = await puppeteer.launch();
   const page = await browser.newPage();

   // Navigation to target website
   await page.goto('https://example.com');

   // Instructions for retrieving data
   const data = await page.evaluate(() => {
     // Your code to retrieve data
     // For example, selecting elements using document.querySelector
     const title = document.querySelector('h1').innerText;
     const paragraph = document.querySelector('p').innerText;

     return {
       title,
       paragraph
     };
   });

   // Closing the browser
   await browser.close();

   return data;
}

// Call the function and output the result to the console
scrapeWebsite().then((result) => {
   console.log(result);
});
