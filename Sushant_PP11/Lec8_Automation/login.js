const puppeteer=require("puppeteer");
const id="jevex92024@rphinfo.com";
const pass="123456789";
let tab; //making tab global 

//puppeteer has promisified function

let browserOpenPromise=puppeteer.launch({
    headless: false,
    defaultViewport: null,   //page ka size by default aata hai wo cancel kar diya humne bcoz we want full size
    args: ["--start-maximized"],  //to open web page in full window

}); 


//headless is true by default so make it false; all these were searched from net
//headless true hoga to browser open hota nahi dikhega
//headless is puppeteer's launch function's property


console.log(browserOpenPromise); //here it gives o/p "Promise { <pending> }"

//promise<pending>




browserOpenPromise.then(function(browser){
    console.log("Browser is opened !!!");
    let pagesPromise=browser.pages();   //we want access to tab that is opened by deafult when browser is opened
    return pagesPromise;
    //or direct "return browser.pages();"  this command was learnt from "pptr.dev"
})
.then(function(pages){
    //pages=[page];  i.e. pages are in form of array and by default only one page is open
    tab=pages[0];
    return tab.goto("https://www.hackerrank.com/auth/login")  //pending promise
})
.then(function(){    //doesn't return any pending promise so no parameter passed
    return tab.type("#input-1", id);  //to give input we use this function
})
.then(function(){
    return tab.type("#input-2", pass);
})
.then(function(){
    return tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled" )
})
// wait and click !!
.then(function(){
    return tab.waitForSelector("#base-card-1-link",{visible: true});
})
.then(function(){
    return tab.click("#base-card-1-link");
})
// wait and click !!
//pehle hume kuch dikhta nahi tha direct page pe pahuch jaate the so we used
//wait command pehle page load hota hai then it proceed
.then(function(){
    return tab.waitForSelector('a[data-attr1="warmup]',{visible: true});
})
.then(function(){
    return tab.click('a[data-attr1="warmup]');
})
.catch(function(err){
    console.log(err);
  })

  function waitAndClick(selector){
    return new Promise( function(scb , fcb){
      let waitPromise = tab.waitForSelector( selector , { visible: true });
      waitPromise.then(function(){
         return tab.click(selector);
      })
      .then(function(){
        scb();
      })
      .catch(function(){
        fcb();
      })
    });
  }
