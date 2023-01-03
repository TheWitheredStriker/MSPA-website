!function() {
	const popupContainer = document.querySelector(".popup"),
		  gender         = document.querySelector(".textContainer p:first-of-type img:first-of-type"),
		  aspect         = document.querySelector(".textContainer p:first-of-type img:nth-of-type(2)"),
		  session        = document.querySelector(".textContainer p:first-of-type img:last-of-type");

	gender.addEventListener("mouseover", () => popupContainer.innerText = gender.title);
	gender.addEventListener("mouseleave", () => popupContainer.innerText = "");

	aspect.addEventListener("mouseover", () => popupContainer.innerText = aspect.title);
	aspect.addEventListener("mouseleave", () => popupContainer.innerText = "");

	session.addEventListener("mouseover", () => popupContainer.innerText = session.title);
	session.addEventListener("mouseleave", () => popupContainer.innerText = "");
}();