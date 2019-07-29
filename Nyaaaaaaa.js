var canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.display = "block";
document.body.appendChild(canvas);
var context = canvas.getContext("2d");
var image = document.createElement("img");
var imageWidthHalf;
var imageHeightHalf;
image.addEventListener(
	"load",
	function() {
		imageWidthHalf = Math.floor(this.width / 2);
		imageHeightHalf = Math.floor(this.height / 2);
		document.addEventListener("click", click, false);
		document.addEventListener("touchstart", touch, false);
		document.addEventListener("touchmove", touch, false);
	},
	false
);
image.src = "Nyaaaaaaa.png";
function click(event) {
	context.drawImage(
		image,
		event.clientX - imageWidthHalf,
		event.clientY - imageHeightHalf
	);
}
function touch(event) {
	event.preventDefault();
	for (var i = 0; i < event.touches.length; i++) {
		context.drawImage(
			image,
			event.touches[i].pageX - imageWidthHalf,
			event.touches[i].pageY - imageHeightHalf
		);
	}
}
