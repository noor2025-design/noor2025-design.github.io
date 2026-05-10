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

// https://developer.mozilla.org/en-US/docs/Web/API/History/scrollRestoration
// tell the browser dont change my scroll position as scrollTo didn't work
history.scrollRestoration = "manual";


let svgElement = document.getElementById("page-load-svg")
let circleSvg = document.getElementById("svg-circle-one")
circleSvg.addEventListener("animationend", () => {
    svgElement.remove()
});
// https://developer.mozilla.org/en-US/docs/Web/API/Element/animationend_event


let animateClass = "fade-in"
let animateBlocks = document.querySelectorAll('.project-card') // Gets all of them.

// Loop through the list, doing this `forEach` one.
animateBlocks.forEach((block) => {
	let sectionObserver = new IntersectionObserver(([entry])=> {
		// When it is intersecting, apply the class; otherwise, remove it.
		if (entry.isIntersecting) {
			block.classList.add(animateClass)
		} 
	}, {
	threshold: 1
		
	})

	sectionObserver.observe(block) // Watch each one!
})