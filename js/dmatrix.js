var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_-/+.,`\"\\|{};'[]?=~:";
var fontSize = 21;

var cvs = document.getElementById("cvs");
var ctx = cvs.getContext("2d");

// Make the canvas fullscreen.
cvs.height = window.innerHeight;
cvs.width = window.innerWidth;

chars = chars.split("");
var columns = cvs.width / fontSize; // Number of columns for the rain.

var drops = [];
for (var x = 0; x < columns; x++)
	drops[x] = 1;

// Drawing the characters.
function draw() {
	// Black background for the canvas.
	// Translucent background to show trail.
	ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
	ctx.fillRect(0, 0, cvs.width, cvs.height);
	ctx.fillStyle = "#00FF00"; // The code rain text color.
	ctx.font = fontSize + "px monospace"; // The code rain text font.

	for (var i = 0; i < drops.length; i++) {
		var text = chars[Math.floor(Math.random() * chars.length)];

		ctx.fillText(text, i * fontSize, drops[i] * fontSize);

		// Send randomly the drop back to the top after it has crossed the screen.
		// Add randomness to the reset, in order to make the drops scattered on the Y axis.
		if (drops[i] * fontSize > cvs.height && Math.random() > 0.985)
			drops[i] = 0;

		// Increment Y coordinate.
		drops[i]++;
	}
}

setInterval(draw, 85);
