// FILE_NAME
function setFileName(fileName) {
    document.getElementById('file-version').textContent = fileName;
}
setFileName("Circus V8.exe");


document.addEventListener('mousemove', e => {
	w = window.innerWidth;
	h = window.innerHeight;
	x = Math.round(e.pageX / w * 100);
	y = Math.round(e.pageY / h * 100);
	document.body.style.background = `radial-gradient(at ${x}% ${y}%, #6b5ef7, #f75e5e)`;
});