const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();


        page = await browser.newPage();
        await page.goto('https://www.simplyquinoa.com/creamy-pumpkin-steel-cut-oats/', {waitUntil: 'load'});


    const newPage = await page.evaluate(() => {
    const name = document.getElementsByClassName("wprm-recipe-name")[0].innerText;
    const summary = document.getElementsByClassName("wprm-recipe-summary")[0].innerText;
    const prepTime = document.getElementsByClassName("wprm-recipe-prep-time-container")[0].innerText;
    const cookTime = document.getElementsByClassName("wprm-recipe-cook-time-container")[0].innerText;
    const servings = document.getElementsByClassName("wprm-recipe-servings-container")[0].innerText;
    const calories = document.getElementsByClassName("wprm-recipe-calories-container")[0].innerText;
    const ingredients = document.getElementsByClassName("wprm-recipe-ingredients-container")[0].innerText;
    const instructions = document.getElementsByClassName("wprm-recipe-instructions-container")[0].innerText;
    const nutrition = document.getElementsByClassName("wprm-nutrition-label-container")[0].innerText;

        const recipeJson = {
          name: name,
          summary: summary,
          prepTime: prepTime,
          cookTime: cookTime,
          servings: servings,
          calories: calories,
          ingredients: ingredients,
          instructions: instructions,
          nutrition: nutrition,
        };
        console.log(recipeJson);


        return  recipeJson

        });
        browser.close();
  })();
