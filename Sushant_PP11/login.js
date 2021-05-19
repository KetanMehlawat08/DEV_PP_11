const puppeteer=require("puppeteer");

//puppeteer has promisified function

let browserOpenPromise=puppeteer.launch({headless: false}); 


//headless is true by default so make it false; all these were searched from net
//headless true hoga to browser open hota nahi dikhega
//headless is puppeteer's launch function's property


console.log(browserOpenPromise); //here it gives o/p "Promise { <pending> }"

//promise<pending>




browserOpenPromise.then(function(browser){
    console.log(browserOpenPromise);    // here it opens a browser
    console.log("Browser is opened !!!");
    let pagesPromise=browser.pages();   //we want access to tab that is opened by deafult when browser is opened
    return pagesPromise;
    //or direct "return browser.pages();"  this command was learnt from "pptr.dev"
})
.then(function(pages){
    //pages=[page];  i.e. pages are in form of array and by default only one page is open
    let tab=pages[0];
    return tab.goto("https://www.google.com")  //pending promise
})
.then(function(){    //doesn't return any pending promise so no parameter passed
    console.log("reached google homepage");
})