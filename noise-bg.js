const canvas = document.getElementById("bg-noise");
const ctx = canvas.getContext("2d");

function renderStaticNoise() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const buf = imageData.data;

    for (let i = 0; i < buf.length; i += 4) {
        const v = Math.random() * 255;
        buf[i] = buf[i + 1] = buf[i + 2] = v;
        buf[i + 3] = 20;  // grain opacity (0–255). 20 = subtle dark noise.
    }
    ctx.putImageData(imageData, 0, 0);
}

renderStaticNoise();

// re-generate when resizing
window.addEventListener("resize", renderStaticNoise);
