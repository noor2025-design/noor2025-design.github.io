let introHeading = document.querySelector(".intro-section h1")
let introHeadingText = introHeading.textContent

let spanText = ""

let introHeadingArray = introHeadingText.split("")
console.log(introHeadingArray);
// splits a string into an array 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

introHeadingArray.forEach((character,index)=>{
let spanElement = `<span>${character}</span>`    
spanText += spanElement
})
introHeading.innerHTML = spanText
// we loop through the array and add each template to the span text using +=
let allSpanElements = document.querySelectorAll("h1 span")
allSpanElements.forEach((element)=>{
    // creates a random number between 0-.5
    let offset = Math.random()*.5
    element.style.animationDelay = `${offset}s`
})