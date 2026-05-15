
//  I noticed that when the page-load animation plays, the scroll position would change depending on where I was on the page. I tried using scrollTo() to fix it but it didnt work. I then found scrollRestoration and set it to "manual" to tell the browser not to touch the scroll position. It somewhat works but isn't completely functional yet.
// Source: https://developer.mozilla.org/en-US/docs/Web/API/History/scrollRestoration

// tell the browser to not change the scroll position as "scrollTo" didn't work
history.scrollRestoration = "manual";


let svgElement = document.getElementById("page-load-svg")
let circleSvg = document.getElementById("svg-circle-one")
circleSvg.addEventListener("animationend", () => {
    svgElement.remove()
});
// I used the animationend event listener to detect when the svg circle animation finished playing. Once the animnation ends, the SVG loading element is removed from the page using .remove(). This automatically hid the loading animation after it was completed. Source: https://developer.mozilla.org/en-US/docs/Web/API/Element/animationend_event


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