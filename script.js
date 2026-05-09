// let introHeading = document.querySelector(".intro-section h1")
// let introHeadingText = introHeading.textContent

// let spanText = ""

// let introHeadingArray = introHeadingText.split("")
// console.log(introHeadingArray);
// splits a string into an array 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

// introHeadingArray.forEach((character)=>{
// let spanElement = `<span class="animate-translate"><span class="animate-grow">${character}</span></span>`    
// spanText += spanElement
// })
// introHeading.innerHTML = spanText
// we loop through the array and add each template to the span text using +=
// let allSpanElements = document.querySelectorAll("h1 > span")
// allSpanElements.forEach((element)=>{
    // creates a random number between 0-.5
//     let offset = Math.random()*1
//     element.style.animationDelay = `${offset}s`
//     element.querySelector("span").style.animationDelay = `${offset}s`
// })

// https://developer.mozilla.org/en-US/dccs/Web/API/Window/scrollTo
window.addEventListener("load",()=>{
window.scrollTo({
  top: 0,
  behavior: "auto",
});
})


let svgElement = document.getElementById("page-load-svg")
let circleSvg = document.getElementById("svg-circle-one")
circleSvg.addEventListener("animationend", () => {
    svgElement.remove()
});
// https://developer.mozilla.org/en-US/docs/Web/API/Element/animationend_event