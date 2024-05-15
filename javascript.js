var canvas_id;
var canvas_context;
var image=new Image();

var canvas2_id;
var canvas2_context;
var image2=new Image();

var canvas3_id;
var canvas3_context;
var image3=new Image();

function resizeCanvas()
	{
    canvas_id.width  = window.innerWidth / 2;
	canvas_id.height = window.innerHeight;
	canvas2_id.width  = window.innerWidth / 2;
	canvas2_id.height = window.innerHeight;
	canvas3_id.width  = window.innerWidth / 4;
	canvas3_id.height = window.innerHeight;

	var height = window.innerHeight;
	var width = image.naturalWidth * window.innerHeight / image.naturalHeight;
	var width2 = image2.naturalWidth * window.innerHeight / image2.naturalHeight;
	var width3 = image3.naturalWidth * window.innerHeight / image3.naturalHeight;

	canvas_context.drawImage(image, 0, 0, width, height);
	canvas2_context.drawImage(image2, canvas2_id.width-width2, 0, width2, height);
	canvas3_context.drawImage(image3, (canvas3_id.width-width3)/2, 0, width3, height);
	}

function getCursorPosition(canvas, context, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    var data = context.getImageData(x, y, 1, 1).data;
	switch (data[0])
		{
		case 16:
			document.getElementById("menu-left-1").classList.replace('hidden', 'show');
			document.getElementById("menu-left-2").classList.replace('show', 'hidden');
			document.getElementById("menu-left-3").classList.replace('show', 'hidden');
			document.getElementById("menu-left-4").classList.replace('show', 'hidden');
			document.getElementById("menu-left-5").classList.replace('show', 'hidden');
			document.getElementById("menu-left-6").classList.replace('show', 'hidden');
			break;
		case 32:
			document.getElementById("menu-left-1").classList.replace('show', 'hidden');
			document.getElementById("menu-left-2").classList.replace('hidden', 'show');
			document.getElementById("menu-left-3").classList.replace('show', 'hidden');
			document.getElementById("menu-left-4").classList.replace('show', 'hidden');
			document.getElementById("menu-left-5").classList.replace('show', 'hidden');
			document.getElementById("menu-left-6").classList.replace('show', 'hidden');
			document.getElementById("menu-right-1").classList.replace('show', 'hidden');
			document.getElementById("menu-right-2").classList.replace('show', 'hidden');
			document.getElementById("menu-right-3").classList.replace('show', 'hidden');
			break;
		case 48:
			document.getElementById("menu-left-1").classList.replace('show', 'hidden');
			document.getElementById("menu-left-2").classList.replace('show', 'hidden');
			document.getElementById("menu-left-3").classList.replace('hidden', 'show');
			document.getElementById("menu-left-4").classList.replace('show', 'hidden');
			document.getElementById("menu-left-5").classList.replace('show', 'hidden');
			document.getElementById("menu-left-6").classList.replace('show', 'hidden');
			break;
		case 64:
			document.getElementById("menu-left-1").classList.replace('show', 'hidden');
			document.getElementById("menu-left-2").classList.replace('show', 'hidden');
			document.getElementById("menu-left-3").classList.replace('show', 'hidden');
			document.getElementById("menu-left-4").classList.replace('hidden', 'show');
			document.getElementById("menu-left-5").classList.replace('show', 'hidden');
			document.getElementById("menu-left-6").classList.replace('show', 'hidden');
			break;
		case 80:
			document.getElementById("menu-left-1").classList.replace('show', 'hidden');
			document.getElementById("menu-left-2").classList.replace('show', 'hidden');
			document.getElementById("menu-left-3").classList.replace('show', 'hidden');
			document.getElementById("menu-left-4").classList.replace('show', 'hidden');
			document.getElementById("menu-left-5").classList.replace('hidden', 'show');
			document.getElementById("menu-left-6").classList.replace('show', 'hidden');
			break;
		case 96:
			document.getElementById("menu-left-1").classList.replace('show', 'hidden');
			document.getElementById("menu-left-2").classList.replace('show', 'hidden');
			document.getElementById("menu-left-3").classList.replace('show', 'hidden');
			document.getElementById("menu-left-4").classList.replace('show', 'hidden');
			document.getElementById("menu-left-5").classList.replace('show', 'hidden');
			document.getElementById("menu-left-6").classList.replace('hidden', 'show');
			break;
		default:
			document.getElementById("menu-left-1").classList.replace('show', 'hidden');
			document.getElementById("menu-left-2").classList.replace('show', 'hidden');
			document.getElementById("menu-left-3").classList.replace('show', 'hidden');
			document.getElementById("menu-left-4").classList.replace('show', 'hidden');
			document.getElementById("menu-left-5").classList.replace('show', 'hidden');
			document.getElementById("menu-left-6").classList.replace('show', 'hidden');
			break;
		}	
}

function getCursorPositionClick(canvas, context, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    var data = context.getImageData(x, y, 1, 1).data;
	switch (data[0])
		{
		case 16:
			window.open("https://github.com/AkinaUsagiAi/Akina-Usagi-Hosts-File", "_blank");
			break;
		case 32:
			window.open("https://github.com/AkinaUsagiAi/Debian-Configurations", "_blank");
			break;
		case 48:
			window.open("https://github.com/AkinaUsagiAi/Electronique-Notes", "_blank");
			break;
		case 64:
			window.open("https://github.com/AkinaUsagiAi/Final-Fantasy-XIV-Notes", "_blank");
			break;
		case 80:
			window.open("https://github.com/AkinaUsagiAi/Open-Ludum", "_blank");
			break;
		case 96:
			window.open("https://github.com/AkinaUsagiAi/Steam-Proton-Solutions", "_blank");
			break;
		default:
			break;
		}	
}

function getCursorPosition2(canvas, context, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    var data = context.getImageData(x, y, 1, 1).data;
	switch (data[0])
		{
		case 112:
			document.getElementById("menu-right-1").classList.replace('hidden', 'show');
			document.getElementById("menu-right-2").classList.replace('show', 'hidden');
			document.getElementById("menu-right-3").classList.replace('show', 'hidden');
			break;
		case 128:
			document.getElementById("menu-right-1").classList.replace('show', 'hidden');
			document.getElementById("menu-right-2").classList.replace('hidden', 'show');
			document.getElementById("menu-right-3").classList.replace('show', 'hidden');
			break;
		case 144:
			document.getElementById("menu-right-1").classList.replace('show', 'hidden');
			document.getElementById("menu-right-2").classList.replace('show', 'hidden');
			document.getElementById("menu-right-3").classList.replace('hidden', 'show');
			break;
		default:
			document.getElementById("menu-right-1").classList.replace('show', 'hidden');
			document.getElementById("menu-right-2").classList.replace('show', 'hidden');
			document.getElementById("menu-right-3").classList.replace('show', 'hidden');
			break;
		}	
}

function getCursorPositionClick2(canvas, context, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    var data = context.getImageData(x, y, 1, 1).data;
	switch (data[0])
		{
		case 112:
			window.open("https://www.sega.com/", "_blank");
			break;
		case 128:
			window.open("https://www.spriters-resource.com/", "_blank");
			break;
		case 144:
			window.open("https://pixai.art/?lang=fr", "_blank");
			break;
		default:
			break;
		}	
}

function getCursorPosition3(canvas, context, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    var data = context.getImageData(x, y, 1, 1).data;
	switch (data[0])
		{
		case 160:
			document.getElementById("menu-1").classList.replace('hidden', 'show');
			document.getElementById("menu-2").classList.replace('show', 'hidden');
			document.getElementById("menu-3").classList.replace('show', 'hidden');
			break;
		case 176:
			document.getElementById("menu-1").classList.replace('show', 'hidden');
			document.getElementById("menu-2").classList.replace('hidden', 'show');
			document.getElementById("menu-3").classList.replace('show', 'hidden');
			break;
		case 192:
			document.getElementById("menu-1").classList.replace('show', 'hidden');
			document.getElementById("menu-2").classList.replace('show', 'hidden');
			document.getElementById("menu-3").classList.replace('hidden', 'show');
			break;
		default:
			document.getElementById("menu-1").classList.replace('show', 'hidden');
			document.getElementById("menu-2").classList.replace('show', 'hidden');
			document.getElementById("menu-3").classList.replace('show', 'hidden');
			break;
		}	
}

function getCursorPositionClick3(canvas, context, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    var data = context.getImageData(x, y, 1, 1).data;
	switch (data[0])
		{
		case 160:
			window.open("https://github.com/AkinaUsagiAi", "_blank");
			break;
		case 176:
			window.open("mailto:akina.usagi.ai@gmail.com", "_blank");
			break;
		case 192:
			window.open("https://www.youtube.com/@AkinaUsagiAi", "_blank");
			break;
		default:
			break;
		}	
}


document.addEventListener('DOMContentLoaded', function()
	{
	canvas_id=document.getElementById("menu-left-area");
	canvas_context=canvas_id.getContext("2d");
	
	canvas2_id=document.getElementById("menu-right-area");
	canvas2_context=canvas2_id.getContext("2d");

	canvas3_id=document.getElementById("menu-area");
	canvas3_context=canvas3_id.getContext("2d");

	document.addEventListener('click', function(e) {
		getCursorPositionClick(canvas_id,canvas_context, e)
		getCursorPositionClick2(canvas2_id,canvas2_context, e)
		getCursorPositionClick3(canvas3_id,canvas3_context, e)
	})

	document.addEventListener('mousemove', function(e) {
		getCursorPosition(canvas_id,canvas_context, e)
		getCursorPosition2(canvas2_id,canvas2_context, e)
		getCursorPosition3(canvas3_id,canvas3_context, e)
	})

	visualViewport.addEventListener("resize", () => {
		resizeCanvas();
	});

	image.onload=function()
		{
		resizeCanvas();
		};
	image.src="./desktop_ui/menu-left-area.png";

	image2.onload=function()
		{
		resizeCanvas();
		};
	image2.src="./desktop_ui/menu-right-area.png";

	image3.onload=function()
		{
		resizeCanvas();
		};
	image3.src="./desktop_ui/menu-area.png";
	}, false);



